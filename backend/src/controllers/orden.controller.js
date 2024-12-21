import { Orden } from '../models/Orden.js';
import { OrdenDetalle } from '../models/OrdenDetalles.js';


export const getOrdenes = async (req, res) => {
  try {
    const ordenes = await Orden.findAll();
    res.status(200).json(ordenes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las órdenes', error });
  }
};

export const getOrdenById = async (req, res) => {
  try {
    const { id } = req.params;

    const orden = await Orden.findByPk(id, {
      include: [{ model: OrdenDetalle }],
    });

    if (!orden) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }

    res.status(200).json(orden);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la orden', error });
  }
};

export const createOrden = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const {
      usuarios_idusuarios,
      estados_idestados,
      nombre_completo,
      direccion,
      telefono,
      correo_electronico,
      fecha_entrega,
      total_orden,
      detalles, 
    } = req.body;

  
    const nuevaOrden = await Orden.create({
      usuarios_idusuarios,
      estados_idestados,
      nombre_completo,
      direccion,
      telefono,
      correo_electronico,
      fecha_entrega,
      total_orden,
    }, { transaction });

   
    for (const detalle of detalles) {
      await OrdenDetalle.create({
        Orden_idOrden: nuevaOrden.idOrden,
        Productos_idProductos: detalle.Productos_idProductos,
        cantidad: detalle.cantidad,
        precio: detalle.precio,
      }, { transaction });
    }

    await transaction.commit();
    res.status(201).json(nuevaOrden);
  } catch (error) {
    await transaction.rollback();
    res.status(500).json({ message: 'Error al crear la orden', error });
  }
};


export const updateOrden = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      estados_idestados,
      nombre_completo,
      direccion,
      telefono,
      correo_electronico,
      fecha_entrega,
      total_orden,
    } = req.body;

    const orden = await Orden.findByPk(id);

    if (!orden) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }

   
    orden.estados_idestados = estados_idestados || orden.estados_idestados;
    orden.nombre_completo = nombre_completo || orden.nombre_completo;
    orden.direccion = direccion || orden.direccion;
    orden.telefono = telefono || orden.telefono;
    orden.correo_electronico = correo_electronico || orden.correo_electronico;
    orden.fecha_entrega = fecha_entrega || orden.fecha_entrega;
    orden.total_orden = total_orden || orden.total_orden;

    await orden.save();
    res.status(200).json(orden);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la orden', error });
  }
};


export const deleteOrden = async (req, res) => {
  try {
    const { id } = req.params;

    const orden = await Orden.findByPk(id);

    if (!orden) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }

   
    await OrdenDetalle.destroy({ where: { Orden_idOrden: id } });

   
    await orden.destroy();

    res.status(204).json({ message: 'Orden eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la orden', error });
  }
};
