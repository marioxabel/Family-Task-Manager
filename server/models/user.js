import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';  // Import sequelize instance

class User extends Model {}

User.init({
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  },
  parent_id: {
    type: DataTypes.INTEGER,
    allowNull: true  // Null for parent users
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  schema: 'public',
  timestamps: true  // Includes createdAt and updatedAt
});

export default User



/*
User Model
The User model represents the parent(s) in the app. Parents manage chores, assign points, and monitor the progress of their children. A parent can have multiple children and receives notifications when tasks are completed or prizes are purchased.

Table Overview:
Table Name: users
Attributes:
id: Primary key (auto-incremented).
email: Unique email used for login.
password: Hashed password (using bcrypt).
role: Role of the user ('parent')
parent_id: Can be null for parent users, but is used to identify child users that are associated with a parent.
created_at / updated_at: Timestamps for tracking user creation and updates.

Relationships:
User ↔ Child: A parent can have many children.
Example: A parent can manage chores for multiple children in the app.
User ↔ Notification: A parent can receive multiple notifications.
Example: A parent is notified when their child completes a chore.
Example:
A parent (John) logs in with their email, and the system pulls up John’s associated children and chores.*/