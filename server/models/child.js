import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';  // Import sequelize instance
import bcrypt from 'bcrypt';

class Child extends Model {
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

Child.init({
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
  parent_id: { // Changed from parent_key to parent_id
    type: DataTypes.INTEGER, // This should be the same type as the Parent model's primary key
    allowNull: false,
    references: {
      model: 'parents', // This should match the name of the Parents table
      key: 'id', // This should match the primary key in the Parents table
    },
  },
}, {
  sequelize,
  modelName: 'Child',
  tableName: 'children',
  schema: 'public',
  timestamps: true,  // Includes createdAt and updatedAt
  hooks: {
    // Before creating a child, hash the password
    beforeCreate: async (child) => {
      child.password = await Child.setPassword(child.password);
      // Optionally, check if parent_id is provided
      if (!child.parent_id) {
        // If parent_id is not provided, throw an error or handle it accordingly
        throw new Error('Parent ID must be provided for the child.');
      }
    },
    // Before updating a child, hash the new password if it has changed
    beforeUpdate: async (child) => {
      if (child.changed('password')) {
        child.password = await Child.setPassword(child.password);
      }
    },
  },
});

export default Child;
