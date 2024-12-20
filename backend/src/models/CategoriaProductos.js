import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const CategoriaProducto = sequelize.define('CategoriaProducto', {
  idCategoriaProductos: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  usuarios_idusuarios: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  estados_idestados: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
  tableName: 'CategoriaProductos',
});
