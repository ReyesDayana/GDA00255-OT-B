import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Cliente = sequelize.define('Cliente', {
  idCliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  razon_social: {
    type: DataTypes.STRING(245),
    allowNull: true,
  },
  nombre_comercial: {
    type: DataTypes.STRING(345),
    allowNull: true,
  },
  direccion_entrega: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING(8),
    allowNull: false,
    validate: {
      isNumeric: true,
      len: [8, 8],
    },
  },
  email: {
    type: DataTypes.STRING(45),
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
}, {
  timestamps: false,
  tableName: 'Clientes',
});
