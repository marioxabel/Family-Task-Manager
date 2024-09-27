import { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';  // Import bcrypt for hashing passwords
import sequelize from '../config/connection.js';  // Import sequelize instance

class User extends Model {}
// Check the password against the hashed password
checkPassword(loginPw) {
  return bcrypt.compareSync(loginPw, this.password);
};

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
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
    allowNull: true,  // Null for parent users
    references: {
      model: 'users', // Self-reference for parent-child relationship
        key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  schema: 'public',
  timestamps: true,  // Includes createdAt and updatedAt
  hooks: {
      // Hash the password before saving
      async beforeCreate(newUser) {
        newUser.password = await bcrypt.hash(newUser.password, 10);
      },
      async beforeUpdate(updatedUser) {
        if (updatedUser.password) {
          updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
        }
      }
    }
});


// Define associations
User.associate = (models) => {
  // A parent user can have multiple child users
  User.hasMany(models.User, {
    as: 'children',
    foreignKey: 'parent_id',
    onDelete: 'CASCADE'
  });

  // A parent can have multiple notifications
  User.hasMany(models.Notification, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
};

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