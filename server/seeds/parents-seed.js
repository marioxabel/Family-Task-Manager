import bcrypt from 'bcrypt';
import Parent from "../models/parent.js";

export const parentSeeder = async () => {
  await Parent.bulkCreate([
    {
      first_name: 'John',
      last_name: 'Doe',
      email: 'parent1@example.com',
      password: 'password1', // Use your hashing method to hash later
      parent_key: '8cdc449c-2056-4223-89a1-5dcd57ce150a',
    },
    {
      first_name: 'Jane',
      last_name: 'Smith',
      email: 'parent2@example.com',
      password: 'password2', // Use your hashing method to hash later
      parent_key: '33afb200-4309-4176-8a0e-2c63051423f2',
    },
    {
      first_name: 'Emily',
      last_name: 'Johnson',
      email: 'parent3@example.com',
      password: 'password3',
      parent_key: 'c0677d68-18ea-4f24-bc76-5e8e8e0e4f38',
    },
  ]);
};
