
import Chore from "../models/chore.js"

export const choreSeeder = async () => {
await Chore.bulkCreate([
  {
    child_id: 1,  // Assign chore to child with ID 1
    chore_name: 'Clean your room',
    category: 'household',
    priority: 'medium',
    points: 10,
    due_date: new Date(),
    recurrence: 'daily',
    status: 'pending',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    child_id: 2,
    chore_name: 'Do homework',
    category: 'schoolwork',
    priority: 'high',
    points: 20,
    due_date: new Date(),
    recurrence: 'once',
    status: 'pending',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);
};