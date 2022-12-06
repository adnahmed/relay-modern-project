import { Environment, RecordSource, Store } from 'relay-runtime';
import {
    RelayNetworkLayer,
    urlMiddleware,
    batchMiddleware,
    loggerMiddleware,
    errorMiddleware,
    perfMiddleware,
    retryMiddleware,
    authMiddleware,
    cacheMiddleware,
    progressMiddleware,
    uploadMiddleware,
    RelayNetworkLayerOpts
} from 'react-relay-network-modern'
import env from '../env'

const source = new RecordSource()
const store= new Store(source)

const opts: RelayNetworkLayerOpts = {}
const network = new RelayNetworkLayer(
    [
        cacheMiddleware({
            size: 100, // max 100 requests
            ttl: 900000, // 15 minutes
        }),
        urlMiddleware({
            url: env.SCHEMA_ENDPOINT,
        }),
        batchMiddleware({
            batchUrl: (requestList) => Promise.resolve(env.SCHEMA_ENDPOINT),
            batchTimeout: 10,
        }),
        env.isDev ? loggerMiddleware() : null,
        env.isDev ? errorMiddleware() : null,
        env.isDev ? perfMiddleware() : null,
        retryMiddleware({
            fetchTimeout: 15000,
            retryDelays: (attempt) => Math.pow(2, attempt + 4),
            beforeRetry: ({ forceRetry, abort, delay, attempt, lastError, req}) => {
                if (attempt > 10) abort()
                window.forceRelayRetry = forceRetry;
                console.log(' call `forceRelayRetry()` fro immediate retry! Or wait ' + delay + ' ms.');
            },
            statusCodes: [500, 503, 504],
        }),
        authMiddleware({
            token: () => 'token', // coookies.get('authorization')
            tokenRefreshPromise: (req) => {
                console.log('[client.ts] resolve token refresh', req);
                return fetch (env.SCHEMA_ENDPOINT + '/jwt/refresh')
                    .then((res) => res.json())
                    .then((json) => {
                        const token = json.token;
                        // store.set('jwt', token);
                        return token;
                    })
                    .catch((err) => console.log('[client.ts] ERROR can not refresh token', err));
            },
            allowEmptyToken: true
        }),
        progressMiddleware({
            onProgress: (current, total) => {
                console.log('Downloaded: ' + current + ' B, total: ' + total + 'B');
            },
        }),
        uploadMiddleware(),
        (next) => async (req) => {
            req.fetchOpts.headers['X-Request-ID'] = window.crypto.randomUUID()
            req.fetchOpts.credentials = env.isDev ? 'include' : 'same-origin'
            const res = await next(req);
            return res;
        }
    ],
    opts
);

const environment = new Environment({
    network,
    store
})

export default environment;