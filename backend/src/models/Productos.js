import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Producto = sequelize.define('Producto', {
  idProductos: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  CategoriaProductos_idCategoriaProductos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  usuarios_idusuarios: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(45),
  },
  marca: {
    type: DataTypes.STRING(45),
  },
  codigo: {
    type: DataTypes.STRING(45),
  },
  stock: {
    type: DataTypes.FLOAT,
    validate: {
      min: 0,
    },
  },
  estados_idestados: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  foto: {
    type: DataTypes.BLOB('long'),
  },
}, {
  timestamps: false,
  tableName: 'Productos',
});
