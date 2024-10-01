import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';  // Import sequelize instance

class Chore extends Model {}

Chore.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true, // Description can be optional
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'in_progress'), // Status of the chore
    defaultValue: 'pending', // Default status is pending
  },
  parent_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'parents', // Reference to the Parents table
      key: 'id', // Key in the Parents table (primary key)
    },
  },
  child_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'children', // Reference to the Children table
      key: 'id', // Key in the Children table
    },
  },
}, {
  sequelize,
  modelName: 'Chore',
  tableName: 'chores',
  schema: 'public',
  timestamps: true,  // Includes createdAt and updatedAt
});

export default Chore;
