import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Usuario } from '../models/Usuario.js';

const SECRET_KEY = process.env.JWT_SECRET;


export const login = async (req, res) => {
  const { correo_electronico, contrasena } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { correo_electronico } });

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    
    const isMatch = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }


    const token = jwt.sign(
      {
        id: usuario.idusuarios,
        correo: usuario.correo_electronico,
        rol: usuario.rol_idrol,
      },
      SECRET_KEY,
      { expiresIn: '24h' } 
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión', error });
  }
};


export const verifyToken = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'No se proporcionó un token' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; 
    next(); 
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido o expirado', error });
  }
};
