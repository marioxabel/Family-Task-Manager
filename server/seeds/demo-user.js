// seeders/xxxx-demo-user.js
import bcrypt from 'bcrypt';
import User from "../models/user.js"

export const userSeeder = async () => {
await User.bulkCreate([
  {
    email: 'parent1@example.com',
    password: await bcrypt.hash('password123', 10), // Hash password
    role: 'parent',
    parent_id: null, // Since this is a parent
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'parent2@example.com',
    password: await bcrypt.hash('password123', 10),
    role: 'parent',
    parent_id: null,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);
};
