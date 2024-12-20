import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Orden = sequelize.define('Orden', {
  idOrden: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  usuarios_idusuarios: {
    type: DataTypes.INTEGER,
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
  nombre_completo: {
    type: DataTypes.STRING(245),
  },
  direccion: {
    type: DataTypes.STRING(545),
  },
  telefono: {
    type: DataTypes.STRING(45),
  },
  correo_electronico: {
    type: DataTypes.STRING(45),
  },
  fecha_entrega: {
    type: DataTypes.DATEONLY,
  },
  total_orden: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'Orden',
});
