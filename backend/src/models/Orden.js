import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Usuario } from './Usuarios.js';
import { Estado } from './Estados.js';

export const Orden = sequelize.define('Orden', {
  idOrden: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  usuarios_idusuarios: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,
      key: 'idusuarios',
    },
  },
  estados_idestados: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Estado,
      key: 'idestados',
    },
  },
  fecha_creacion: {
    type: DataTypes.DATE,
  },
  nombre_completo: {
    type: DataTypes.STRING(245),
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING(545),
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  correo_electronico: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  fecha_entrega: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  total_orden: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  timestamps: false, 
  tableName: 'Orden', 
});
