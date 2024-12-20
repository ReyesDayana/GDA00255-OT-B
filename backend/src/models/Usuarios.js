import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Usuario = sequelize.define('Usuario', {
  idusuarios: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  rol_idrol: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estados_idestados: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  correo_electronico: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true,
  },
  nombre_completo: {
    type: DataTypes.STRING(245),
  },
  contrasena: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING(45),
  },
  fecha_nacimiento: {
    type: DataTypes.DATEONLY,
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  Clientes_idCliente: {
    type: DataTypes.INTEGER,
  },
}, {
  timestamps: false,
  tableName: 'usuarios',
});
