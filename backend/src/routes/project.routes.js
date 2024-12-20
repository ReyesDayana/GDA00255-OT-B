import { Router } from 'express';
import {getUsuarios, getUsuarioById,createUsuario, updateUsuario} from '../controllers/usuarios.controller.js';
import { getEstados,getEstadoById,createEstado,updateEstado,deleteEstado,} from '../controllers/estados.controller.js';
  
const router = Router();

// Rutas para Usuarios
router.get('/usuarios', getUsuarios);              // Obtener todos los usuarios
router.get('/usuarios/:id', getUsuarioById);       // Obtener un usuario por ID
router.post('/usuarios', createUsuario);           // Crear un usuario
router.put('/usuarios/:id', updateUsuario);        // Actualizar un usuario


// Rutas estados
router.get('/estados', getEstados);           // Obtener todos los estados
router.get('/estados/:id', getEstadoById);    // Obtener un estado por ID
router.post('/estados', createEstado);        // Crear un nuevo estado
router.put('/estados/:id', updateEstado);     // Actualizar un estado existente
router.delete('/estados/:id', deleteEstado);  // Eliminar un estado

export default router;