import { Router } from "express";
import bcrypt from 'bcrypt';
import { User} from "../interface/user.interface.js";
import { generateToken } from "../util/token.util.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

const users: User[] = []

router.post('/register', async (req, res) => {
  const { email, password } = req.body

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = {
    id: users.length + 1,
    email,
    password: hashedPassword
  }

  users.push(user)

  res.json({ message: 'User registered' })
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  const user = users.find(u => u.email === email)

  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' })
  }

  const token = generateToken(user)

  res.json({ token })
})

router.get('/profile', authMiddleware, (req, res) => {
  res.json({
    message: 'Protected data',
    user: req.user
  })
})




export default router;
