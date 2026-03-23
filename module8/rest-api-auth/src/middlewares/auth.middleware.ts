import{ Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/env.config.js'

const jwtToken = JWT_SECRET.JWT_SECRET || "defaultsecret"


export function authMiddleware(req: any, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' })
  }

  const token = authHeader
  console.log("Token received:", token)

  try {
    const decoded = jwt.verify(token, jwtToken)
    req.user = decoded
    next()
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' })
  }
}
