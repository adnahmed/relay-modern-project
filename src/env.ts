import { cleanEnv, str, url } from 'envalid'

const isDevelopment = process.env.NODE_ENV === 'development'
const env = cleanEnv(process.env, {
  SCHEMA_ENDPOINT: url({ default: 'http://localhost:4000/graphql' }),
  JWT_SECRET: str({ default: isDevelopment ? 'mysecret' : undefined }),
  JWT_EXPIRE: str({ default: '7d' }),
})

export default env
