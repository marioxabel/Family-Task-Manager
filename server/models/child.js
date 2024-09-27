import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class Child extends Model {}

Child.init({
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  parent_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  points: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0  // Points start at 0
  }
}, {
  sequelize,
  modelName: 'Child',
  tableName: 'children',
  schema: 'public',
  timestamps: true
});

export default Child;  // Ensure default export


/*Child Model
The Child model represents the children in the app. A child is assigned chores and earns points based on task completion. Each child has a link to a parent (or multiple parents).

Table Overview:
Table Name: children
Attributes:
id: Primary key (auto-incremented).
first_name: The child’s first name.
last_name: The child’s last name.
parent_id: References the parent (user) this child belongs to.
points: The total number of points the child has earned.
created_at / updated_at: Timestamps for when the child record was created and last updated.
Relationships:
Child ↔ User: Each child belongs to one parent, but a parent can have multiple children.
Example: Parent John has two children, Alice and Bob.
Child ↔ Chore: A child can have many chores assigned to them.
Example: Alice has the task of "cleaning her room" and "doing homework."
Child ↔ Notification: Notifications are tied to specific children when an event like chore completion happens.
Example: A notification tells John that Alice completed her homework.
Example:
Alice is assigned chores by her parent, and her points accumulate as she completes them. These points can later be used in the prize store.*/
