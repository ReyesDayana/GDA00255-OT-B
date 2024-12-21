import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Producto } from './Productos.js';
import { Orden } from './Orden.js';

export const OrdenDetalle = sequelize.define('OrdenDetalle', {
  idOrdenDetalles: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Orden_idOrden: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Orden,
      key: 'idOrden',
    },
  },
  Productos_idProductos: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Producto,
      key: 'idProductos',
    },
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
    },
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  subtotal: {
    type: DataTypes.VIRTUAL,
    get() {
      return this.cantidad * this.precio;
    },
  },
}, {
  timestamps: false,
  tableName: 'OrdenDetalles',
});

// Relaciones
OrdenDetalle.belongsTo(Orden, { foreignKey: 'Orden_idOrden' });
OrdenDetalle.belongsTo(Producto, { foreignKey: 'Productos_idProductos' });
