import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { CategoriaProducto } from './CategoriaProductos.js';
import { Usuario } from './Usuarios.js';
import { Estado } from './Estados.js';

export const Producto = sequelize.define('Producto', {
  idProductos: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  CategoriaProductos_idCategoriaProductos: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: CategoriaProducto,
      key: 'idCategoriaProductos',
    },
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
  marca: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  codigo: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  stock: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0, // El stock no puede ser negativo
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
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  fecha_creacion: {
    type: DataTypes.DATE,

  },
  foto: {
    type: DataTypes.BLOB,
    allowNull: true, 
  },
}, {
  timestamps: false,
  tableName: 'Productos',
});


Producto.belongsTo(CategoriaProducto, { foreignKey: 'CategoriaProductos_idCategoriaProductos' });
Producto.belongsTo(Usuario, { foreignKey: 'usuarios_idusuarios' });
Producto.belongsTo(Estado, { foreignKey: 'estados_idestados' });
