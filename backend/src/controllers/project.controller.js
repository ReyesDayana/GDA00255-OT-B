import { Producto } from '../models/Productos.js';

// Obtener todos los productos
export const getProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos', error });
  }
};

// Crear un producto
export const createProducto = async (req, res) => {
  try {
    const { nombre, marca, codigo, stock, estados_idestados, precio } = req.body;
    const nuevoProducto = await Producto.create({ nombre, marca, codigo, stock, estados_idestados, precio });
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el producto', error });
  }
};

// Actualizar un producto
export const updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, marca, codigo, stock, estados_idestados, precio } = req.body;
    const producto = await Producto.findByPk(id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    producto.nombre = nombre;
    producto.marca = marca;
    producto.codigo = codigo;
    producto.stock = stock;
    producto.estados_idestados = estados_idestados;
    producto.precio = precio;
    await producto.save();
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el producto', error });
  }
};
