import bcrypt from 'bcrypt';
import Child from '../models/child.js';  // Import the Child model

export const childSeeder = async () => {
  // You can choose a salt rounds value, typically 10-12 is good for production
  const saltRounds = 10;

  // Hash the passwords before storing them
  const childData = [
    {
      first_name: 'Alice',
      last_name: 'Doe',
      email: 'alice@example.com',
      password: await bcrypt.hash('childPassword1', saltRounds), // Hash the password
      parent_id: 1, // Assuming linked to Parent One
    },
    {
      first_name: 'Bob',
      last_name: 'Doe',
      email: 'bob@example.com',
      password: await bcrypt.hash('childPassword2', saltRounds), // Hash the password
      parent_id: 1, // Assuming linked to Parent One
    },
    {
      first_name: 'Charlie',
      last_name: 'Smith',
      email: 'charlie@example.com',
      password: await bcrypt.hash('childPassword3', saltRounds), // Hash the password
      parent_id: 2, // Assuming linked to Parent Two
    },
    {
      first_name: 'Daisy',
      last_name: 'Smith',
      email: 'daisy@example.com',
      password: await bcrypt.hash('childPassword4', saltRounds), // Hash the password
      parent_id: 2, // Assuming linked to Parent Two
    },
    {
      first_name: 'Ethan',
      last_name: 'Brown',
      email: 'ethan@example.com',
      password: await bcrypt.hash('childPassword5', saltRounds), // Hash the password
      parent_id: 3, // Assuming linked to Parent Three
    },
  ];

  await Child.bulkCreate(childData);
};
