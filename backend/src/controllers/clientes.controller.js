import { Cliente } from '../models/Clientes.js';

// Obtener todos los clientes
export const getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los clientes', error });
  }
};

// Obtener un cliente por ID
export const getClienteById = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);

    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el cliente', error });
  }
};

// Crear un cliente
export const createCliente = async (req, res) => {
  try {
    const { razon_social, nombre_comercial, direccion_entrega, telefono, email } = req.body;

    const nuevoCliente = await Cliente.create({
      razon_social,
      nombre_comercial,
      direccion_entrega,
      telefono,
      email,
    });

    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el cliente', error });
  }
};

// Actualizar un cliente
export const updateCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { razon_social, nombre_comercial, direccion_entrega, telefono, email } = req.body;

    const cliente = await Cliente.findByPk(id);

    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    // Actualizar los campos
    cliente.razon_social = razon_social || cliente.razon_social;
    cliente.nombre_comercial = nombre_comercial || cliente.nombre_comercial;
    cliente.direccion_entrega = direccion_entrega || cliente.direccion_entrega;
    cliente.telefono = telefono || cliente.telefono;
    cliente.email = email || cliente.email;

    await cliente.save();
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el cliente', error });
  }
};

// Eliminar un cliente
export const deleteCliente = async (req, res) => {
  try {
    const { id } = req.params;

    const cliente = await Cliente.findByPk(id);

    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    await cliente.destroy();
    res.status(204).json({ message: 'Cliente eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el cliente', error });
  }
};
