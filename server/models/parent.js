import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';  // Import sequelize instance
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid'; // Import uuid for generating unique keys

class Parent extends Model {
  // Method to hash the password
  static async setPassword(password) {
    const salt = await bcrypt.genSalt(10); // Generate a salt
    return await bcrypt.hash(password, salt); // Hash the password
  }

  // Method to check password
  async checkPassword(password) {
    return await bcrypt.compare(password, this.password); // Compare input password with hashed password
  }
}

Parent.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  parent_key: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, // Automatically generate a UUID
    unique: true,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Parent',
  tableName: 'parents',
  schema: 'public',
  timestamps: true,  // Includes createdAt and updatedAt
  hooks: {
    // Before creating a parent, hash the password
    beforeCreate: async (parent) => {
      parent.password = await Parent.setPassword(parent.password);
      // Optionally, generate the parent_key here if needed
      if (!parent.parent_key) {
        parent.parent_key = uuidv4(); // Generate a UUID for parent_key if not provided
      }
    },
    // Before updating a parent, hash the new password if it has changed
    beforeUpdate: async (parent) => {
      if (parent.changed('password')) {
        parent.password = await Parent.setPassword(parent.password);
      }
    },
  },
});

export default Parent;
