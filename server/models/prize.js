import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class Prize extends Model {}

Prize.init({
  parent_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  prize_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  points_cost: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Prize',
  tableName: 'prizes',
  schema: 'public',
  timestamps: true
});

export default Prize
