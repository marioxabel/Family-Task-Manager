import Chore from '../models/chore.js';

// Helper function to randomly select a status
const getRandomStatus = () => {
  const statuses = ['pending', 'completed', 'in_progress'];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

export const choreSeeder = async () => {
  await Chore.bulkCreate([
    // Chores for Alice
    {
      name: 'Clean the Room',
      description: 'Tidy up the bedroom and organize toys.',
      status: getRandomStatus(),
      parent_id: 1, // Linked to Parent One
      child_id: 1,  // Linked to Child One (Alice)
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Do Homework',
      description: 'Complete math and science assignments.',
      status: getRandomStatus(),
      parent_id: 1,
      child_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    // Chores for Bob
    {
      name: 'Take Out the Trash',
      description: 'Empty the kitchen trash can.',
      status: getRandomStatus(),
      parent_id: 1,
      child_id: 2,  // Linked to Child Two (Bob)
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Feed the Dog',
      description: 'Make sure to feed the dog and refill the water bowl.',
      status: getRandomStatus(),
      parent_id: 1,
      child_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    // Chores for Charlie
    {
      name: 'Wash the Dishes',
      description: 'Clean all dishes after dinner.',
      status: getRandomStatus(),
      parent_id: 2,
      child_id: 3,  // Linked to Child Three (Charlie)
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Vacuum the Living Room',
      description: 'Make sure to vacuum the carpet thoroughly.',
      status: getRandomStatus(),
      parent_id: 2,
      child_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Organize the Bookshelf',
      description: 'Sort and organize books by category.',
      status: getRandomStatus(),
      parent_id: 2,
      child_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    // Chores for Daisy
    {
      name: 'Make the Bed',
      description: 'Straighten the sheets and fluff the pillows.',
      status: getRandomStatus(),
      parent_id: 2,
      child_id: 4,  // Linked to Child Four (Daisy)
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Help with Grocery Shopping',
      description: 'Assist parents with the grocery list and shopping.',
      status: getRandomStatus(),
      parent_id: 2,
      child_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    // Chores for Ethan
    {
      name: 'Clean the Bathroom',
      description: 'Scrub the sink and toilet, and wipe the mirrors.',
      status: getRandomStatus(),
      parent_id: 3,
      child_id: 5,  // Linked to Child Five (Ethan)
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Prepare Dinner',
      description: 'Help parents prepare dinner by chopping vegetables.',
      status: getRandomStatus(),
      parent_id: 3,
      child_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Set the Table',
      description: 'Lay out plates, utensils, and napkins for dinner.',
      status: getRandomStatus(),
      parent_id: 3,
      child_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
};
