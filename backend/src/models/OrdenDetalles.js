import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const OrdenDetalles = sequelize.define('OrdenDetalles', {
  idOrdenDetalles: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Orden_idOrden: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Productos_idProductos: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
