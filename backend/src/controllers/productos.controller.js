import { Producto } from '../models/Productos.js';

export const getProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos', error });
  }
};


export const getProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el producto', error });
  }
};


export const createProducto = async (req, res) => {
  try {
    const {
      CategoriaProductos_idCategoriaProductos,
      usuarios_idusuarios,
      nombre,
      marca,
      codigo,
      stock,
      estados_idestados,
      precio,
      foto,
    } = req.body;

    const nuevoProducto = await Producto.create({
      CategoriaProductos_idCategoriaProductos,
      usuarios_idusuarios,
      nombre,
      marca,
      codigo,
      stock,
      estados_idestados,
      precio,
      foto,
    });

    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el producto', error });
  }
};


export const updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      CategoriaProductos_idCategoriaProductos,
      usuarios_idusuarios,
      nombre,
      marca,
      codigo,
      stock,
      estados_idestados,
      precio,
      foto,
    } = req.body;

    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    
    producto.CategoriaProductos_idCategoriaProductos = CategoriaProductos_idCategoriaProductos || producto.CategoriaProductos_idCategoriaProductos;
    producto.usuarios_idusuarios = usuarios_idusuarios || producto.usuarios_idusuarios;
    producto.nombre = nombre || producto.nombre;
    producto.marca = marca || producto.marca;
    producto.codigo = codigo || producto.codigo;
    producto.stock = stock || producto.stock;
    producto.estados_idestados = estados_idestados || producto.estados_idestados;
    producto.precio = precio || producto.precio;
    producto.foto = foto || producto.foto;

    await producto.save();
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el producto', error });
  }
};


export const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;

    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    await producto.destroy();
    res.status(204).json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el producto', error });
  }
};
