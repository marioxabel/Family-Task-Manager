
import Prize from "../models/prize.js"

export const prizeSeeder = async () => {
await Prize.bulkCreate([
  {
    parent_id: 1,  // Owned by parent1
    prize_name: 'New Toy',
    points_cost: 50,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    parent_id: 1,
    prize_name: 'Pizza Night',
    points_cost: 30,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);
};

