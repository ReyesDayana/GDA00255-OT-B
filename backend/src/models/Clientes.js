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
  },
  nombre_comercial: {
    type: DataTypes.STRING(345),
  },
  direccion_entrega: {
    type: DataTypes.STRING(45),
  },
  telefono: {
    type: DataTypes.CHAR(8),
    validate: {
      isNumeric: true,
    },
  },
  email: {
    type: DataTypes.STRING(45),
    validate: {
      isEmail: true,
    },
  },
}, {
  timestamps: false,
  tableName: 'Clientes',
});
