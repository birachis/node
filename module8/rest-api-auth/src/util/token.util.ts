import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/env.config.js'

import { User } from "../interface/user.interface.js";

const jwtToken = JWT_SECRET.JWT_SECRET || "defaultsecret"

// Generate token
export function generateToken(user: User) {
  const token = jwt.sign({ id: user.id, email: user.email }, jwtToken, 
   {
    expiresIn: '1h'
  });

  return token;
}
