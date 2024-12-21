import { CategoriaProducto } from '../models/CategoriaProductos.js';

// Obtener todas las categorías
export const getCategorias = async (req, res) => {
  try {
    const categorias = await CategoriaProducto.findAll();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las categorías', error });
  }
};

// Obtener una categoría por ID
export const getCategoriaById = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await CategoriaProducto.findByPk(id);

    if (!categoria) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    res.status(200).json(categoria);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la categoría', error });
  }
};

// Crear una categoría
export const createCategoria = async (req, res) => {
  try {
    const { usuarios_idusuarios, nombre, estados_idestados } = req.body;

    const nuevaCategoria = await CategoriaProducto.create({
      usuarios_idusuarios,
      nombre,
      estados_idestados,
    });

    res.status(201).json(nuevaCategoria);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la categoría', error });
  }
};

// Actualizar una categoría
export const updateCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const { usuarios_idusuarios, nombre, estados_idestados } = req.body;

    const categoria = await CategoriaProducto.findByPk(id);

    if (!categoria) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    // Actualizar los campos
    categoria.usuarios_idusuarios = usuarios_idusuarios || categoria.usuarios_idusuarios;
    categoria.nombre = nombre || categoria.nombre;
    categoria.estados_idestados = estados_idestados || categoria.estados_idestados;

    await categoria.save();
    res.status(200).json(categoria);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la categoría', error });
  }
};

// Eliminar una categoría
export const deleteCategoria = async (req, res) => {
  try {
    const { id } = req.params;

    const categoria = await CategoriaProducto.findByPk(id);

    if (!categoria) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    await categoria.destroy();
    res.status(204).json({ message: 'Categoría eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la categoría', error });
  }
};
