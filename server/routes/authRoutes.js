import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = Router();

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Busca al usuario por email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Compara la contraseña usando bcrypt
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Genera el token JWT
    const secretKey = process.env.JWT_SECRET_KEY || '';
    const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, { expiresIn: '1h' });

    // Devuelve el token al cliente
    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error', error });
  }
};

// Ruta de login
router.post('/login', login);

export default router;
