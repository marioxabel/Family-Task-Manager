import bcrypt from 'bcrypt';
import Parent from "../models/parent.js";

export const parentSeeder = async () => {
  // You can choose a salt rounds value, typically 10-12 is good for production
  const saltRounds = 10;

  // Hash the passwords before storing them
  const parentData = [
    {
      first_name: 'John',
      last_name: 'Doe',
      email: 'parent1@example.com',
      password: await bcrypt.hash('password1', saltRounds), // Hash the password
      parent_key: '8cdc449c-2056-4223-89a1-5dcd57ce150a',
    },
    {
      first_name: 'Jane',
      last_name: 'Smith',
      email: 'parent2@example.com',
      password: await bcrypt.hash('password2', saltRounds), // Hash the password
      parent_key: '33afb200-4309-4176-8a0e-2c63051423f2',
    },
    {
      first_name: 'Emily',
      last_name: 'Johnson',
      email: 'parent3@example.com',
      password: await bcrypt.hash('password3', saltRounds), // Hash the password
      parent_key: 'c0677d68-18ea-4f24-bc76-5e8e8e0e4f38',
    },
  ];

  await Parent.bulkCreate(parentData);
};
