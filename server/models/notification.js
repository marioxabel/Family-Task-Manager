import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class Notification extends Model {}

Notification.init({
  parent_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  child_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false
  },
  read: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  sequelize,
  modelName: 'Notification',
  tableName: 'notifications',
  timestamps: true
});

export default Notification


/* Notification Model
The Notification model stores messages for parents to keep them informed about events like chore completions and prize purchases. Each notification is linked to a specific parent and child.

Table Overview:
Table Name: notifications
Attributes:
id: Primary key (auto-incremented).
parent_id: Foreign key linking to the parent (user) who receives the notification.
child_id: Foreign key linking to the child the notification is about.
message: The content of the notification (e.g., "Alice has completed her homework").
read: Boolean value indicating whether the parent has read the notification (default is false).
created_at: Timestamp for when the notification was created.
Relationships:
Notification ↔ User: Notifications are sent to the parent user.
Example: John receives a notification when Alice completes a task.
Notification ↔ Child: Notifications are tied to a child.
Example: The notification includes details about which child completed the task (Alice).
Example:
A parent logs in and sees a notification that says, "Alice has completed her homework and earned 15 points."*/