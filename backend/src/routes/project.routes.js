import { Router } from 'express';
import {getUsuarios, getUsuarioById,createUsuario, updateUsuario} from '../controllers/usuarios.controller.js';
import { getEstados,getEstadoById,createEstado,updateEstado,deleteEstado,} from '../controllers/estados.controller.js';
import {getProductos,getProductoById,createProducto,updateProducto,deleteProducto,} from '../controllers/productos.controller.js';
import { getCategorias,getCategoriaById,createCategoria,updateCategoria,deleteCategoria,} from '../controllers/categorias.controller.js'

const router = Router();

// Rutas para Usuarios
router.get('/usuarios', getUsuarios);             
router.get('/usuarios/:id', getUsuarioById);      
router.post('/usuarios', createUsuario);           
router.put('/usuarios/:id', updateUsuario);       


// Rutas estados
router.get('/estados', getEstados);           
router.get('/estados/:id', getEstadoById);  
router.post('/estados', createEstado);        
router.put('/estados/:id', updateEstado);    
router.delete('/estados/:id', deleteEstado);  


// Rutas  Productos
router.get('/productos', getProductos);           
router.get('/productos/:id', getProductoById);    
router.post('/productos', createProducto);       
router.put('/productos/:id', updateProducto);     
router.delete('/productos/:id', deleteProducto);  


// Rutas  CategoriaProductos
router.get('/categorias', getCategorias);           
router.get('/categorias/:id', getCategoriaById);   
router.post('/categorias', createCategoria);       
router.put('/categorias/:id', updateCategoria);     
router.delete('/categorias/:id', deleteCategoria);  

export default router;