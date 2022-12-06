import { cleanEnv, url } from 'envalid'

const env = cleanEnv(process.env, {
    SCHEMA_ENDPOINT: url({ default: 'http://localhost:4000/graphql'})
})

export default env;