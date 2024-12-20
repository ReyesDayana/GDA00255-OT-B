import { Estado } from '../models/Estados.js';


export const getEstados = async (req, res) => {
  try {
    const estados = await Estado.findAll();
    res.status(200).json(estados);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los estados', error });
  }
};

export const getEstadoById = async (req, res) => {
  try {
    const { id } = req.params;
    const estado = await Estado.findByPk(id);

    if (!estado) {
      return res.status(404).json({ message: 'Estado no encontrado' });
    }

    res.status(200).json(estado);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el estado', error });
  }
};


export const createEstado = async (req, res) => {
  try {
    const { nombre } = req.body;
    const nuevoEstado = await Estado.create({ nombre });
    res.status(201).json(nuevoEstado);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el estado', error });
  }
};


export const updateEstado = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;

    const estado = await Estado.findByPk(id);

    if (!estado) {
      return res.status(404).json({ message: 'Estado no encontrado' });
    }

    estado.nombre = nombre || estado.nombre;
    await estado.save();

    res.status(200).json(estado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el estado', error });
  }
};


export const deleteEstado = async (req, res) => {
  try {
    const { id } = req.params;

    const estado = await Estado.findByPk(id);

    if (!estado) {
      return res.status(404).json({ message: 'Estado no encontrado' });
    }

    await estado.destroy();
    res.status(204).json({ message: 'Estado eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el estado', error });
  }
};

