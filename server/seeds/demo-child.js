
import Child from "../models/child.js"

export const childSeeder = async () => {
await Child.bulkCreate([
  {
    first_name: 'John',
    last_name: 'Doe',
    parent_id: 1,  // Assuming this child belongs to parent1
    points: 100,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    first_name: 'Jane',
    last_name: 'Doe',
    parent_id: 1,  // Assuming this child belongs to parent1
    points: 50,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);
};
