import { Model, DataTypes } from'sequelize';
import sequelize from '../config/connection.js';

class Chore extends Model {}

Chore.init({
  child_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  chore_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  priority: {
    type: DataTypes.STRING,
    allowNull: false
  },
  points: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  due_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  recurrence: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pending'  // Initial status
  }
}, {
  sequelize,
  modelName: 'Chore',
  tableName: 'chores',
  schema: 'public',
  timestamps: true
});

export default Chore


/*Chore Model
The Chore model represents tasks or chores that parents assign to children. Each chore is associated with a child and contains details about the task, including when it is due and the number of points awarded.

Table Overview:
Table Name: chores
Attributes:
id: Primary key (auto-incremented).
child_id: Foreign key referencing the child assigned to this chore.
chore_name: The name of the task (e.g., "clean room").
category: The type of task (e.g., schoolwork, housework, special).
priority: The importance of the task (low, medium, high).
points: Number of points awarded when the chore is completed.
due_date: The date the task needs to be completed.
recurrence: Defines if the task is a one-time or recurring event (e.g., "daily" or "Mondays and Wednesdays").
status: Tracks whether the task is pending, completed, or confirmed by a parent.
created_at / updated_at: Timestamps for when the chore was created and updated.
Relationships:
Chore ↔ Child: A child can have many chores assigned to them.
Example: Alice’s chores for the week include "clean room" and "do homework."
Example:
The parent creates a chore for Alice to clean her room, and the app assigns it to Alice with a due date and points value.*/