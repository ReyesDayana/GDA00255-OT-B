import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Rol = sequelize.define('Rol', {
  idrol: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'rol',
});
