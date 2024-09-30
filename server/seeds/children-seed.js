import Child from '../models/child.js';  // Import the Child model

export const childSeeder = async () => {
  await Child.bulkCreate([
    {
      first_name: 'Alice',
      last_name: 'Doe',
      email: 'alice@example.com',
      password: 'childPassword1',
      parent_id: 1, // Assuming linked to Parent One
    },
    {
      first_name: 'Bob',
      last_name: 'Doe',
      email: 'bob@example.com',
      password: 'childPassword2',
      parent_id: 1, // Assuming linked to Parent One
    },
    {
      first_name: 'Charlie',
      last_name: 'Smith',
      email: 'charlie@example.com',
      password: 'childPassword3',
      parent_id: 2, // Assuming linked to Parent Two
    },
    {
      first_name: 'Daisy',
      last_name: 'Smith',
      email: 'daisy@example.com',
      password: 'childPassword4',
      parent_id: 2, // Assuming linked to Parent Two
    },
    {
      first_name: 'Ethan',
      last_name: 'Brown',
      email: 'ethan@example.com',
      password: 'childPassword5',
      parent_id: 3, // Assuming linked to Parent Three
    },
  ]);
};
