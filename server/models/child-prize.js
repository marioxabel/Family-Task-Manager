import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class ChildPrize extends Model {}

ChildPrize.init({
  child_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  prize_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  purchase_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  modelName: 'Child_Prize',
  tableName: 'child_prizes',
  schema: 'public',
  timestamps: false  // Manually manage timestamps
});

export default ChildPrize;  // Ensure a default export


/*hild_Prize Model
The Child_Prize model acts as a join table that tracks the prizes purchased by each child. It records when a child buys a prize and links it to both the child and the prize.

Table Overview:
Table Name: child_prizes
Attributes:
id: Primary key (auto-incremented).
child_id: Foreign key referencing the child who purchased the prize.
prize_id: Foreign key referencing the prize that was purchased.
purchase_date: The date when the prize was purchased.
Relationships:
Child_Prize ↔ Child: A child can have many purchased prizes.
Child_Prize ↔ Prize: A prize can be purchased multiple times by different children.
Example:
Alice buys a "new toy" for 100 points. This purchase is recorded in the Child_Prize table with Alice’s child_id and the prize's prize_id.*/