import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Usuario } from './Usuarios.js';
import { Estado } from './Estados.js';

export const CategoriaProducto = sequelize.define('CategoriaProducto', {
  idCategoriaProductos: {
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
  nombre: {
    type: DataTypes.STRING(45),
    allowNull: false,
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
}, {
  timestamps: false,
  tableName: 'CategoriaProductos',
});

// Relaciones
CategoriaProducto.belongsTo(Usuario, { foreignKey: 'usuarios_idusuarios' });
CategoriaProducto.belongsTo(Estado, { foreignKey: 'estados_idestados' });
