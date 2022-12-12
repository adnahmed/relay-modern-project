import jwt_decode, { InvalidTokenError, JwtPayload } from 'jwt-decode'
import timestring from 'timestring'

import env from '../../env'

export interface AuthTokenPayload extends JwtPayload {
  id: string
}

export const handleAuth = (value, setCookies, navigate) => {
  try {
    const token: string = value.login
    const decoded = jwt_decode<AuthTokenPayload>(token)
    const expires: number = decoded?.sub ? timestring(decoded?.sub) : env.JWT_EXPIRE
    setCookies('jwt', token, {
      httpOnly: true,
      sameSite: true,
      maxAge: expires,
      path: '/',
    })
    setCookies('uid', decoded.id, {
      sameSite: true,
      maxAge: expires,
      path: '/',
    })
    navigate('/')
  } catch (err) {
    if (err instanceof InvalidTokenError) console.log('Invalid Token Recieved')
  }
}
