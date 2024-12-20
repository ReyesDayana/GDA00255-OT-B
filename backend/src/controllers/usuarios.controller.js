import { Usuario } from '../models/Usuarios.js';
import bcrypt from 'bcrypt';
import moment from 'moment'; // Librería para manejar fechas

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      attributes: { exclude: ['contrasena'] }, 
    });
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios', error });
  }
};

export const getUsuarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id, {
      attributes: { exclude: ['contrasena'] }, 
    });

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el usuario', error });
  }
};


export const createUsuario = async (req, res) => {
    try {
      const {
        rol_idrol,
        estados_idestados,
        correo_electronico,
        nombre_completo,
        contrasena,
        telefono,
        fecha_nacimiento,
        Clientes_idCliente,
      } = req.body;
  
     
      const formattedFechaNacimiento = moment(fecha_nacimiento).format('YYYY-MM-DD'); 
      const hashedPassword = await bcrypt.hash(contrasena, 10);
  
      const nuevoUsuario = await Usuario.create({
        rol_idrol,
        estados_idestados,
        correo_electronico,
        nombre_completo,
        contrasena: hashedPassword,
        telefono,
        fecha_nacimiento: formattedFechaNacimiento,
        Clientes_idCliente,
      });
  
      res.status(201).json(nuevoUsuario);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el usuario', error });
    }
  };


export const updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { rol_idrol, estados_idestados, correo_electronico, nombre_completo, contrasena, telefono, fecha_nacimiento, Clientes_idCliente } = req.body;

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    
    usuario.rol_idrol = rol_idrol || usuario.rol_idrol;
    usuario.estados_idestados = estados_idestados || usuario.estados_idestados;
    usuario.correo_electronico = correo_electronico || usuario.correo_electronico;
    usuario.nombre_completo = nombre_completo || usuario.nombre_completo;
    usuario.telefono = telefono || usuario.telefono;
    usuario.fecha_nacimiento = fecha_nacimiento || usuario.fecha_nacimiento;
    usuario.Clientes_idCliente = Clientes_idCliente || usuario.Clientes_idCliente;

    if (contrasena) {
      usuario.contrasena = await bcrypt.hash(contrasena, 10); // Encriptar la nueva contraseña si se proporciona
    }

    await usuario.save();
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el usuario', error });
  }
};
