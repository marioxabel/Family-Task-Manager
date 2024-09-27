import { sequelize } from '../models/index.js';
import { userSeeder } from './demo-user.js';         // Replace xxxx with the actual timestamp
import {childSeeder} from './demo-child.js';       // Replace xxxx with the actual timestamp
import {choreSeeder} from './demo-chore.js';       // Replace xxxx with the actual timestamp
import {prizeSeeder} from './demo-prize.js';       // Replace xxxx with the actual timestamp
import {childPrizeSeeder} from './demo-child-prize.js';  // Replace xxxx with the actual timestamp
import {notificationSeeder} from './demo-notification.js'; // Replace xxxx with the actual timestamp


const seedAll = async () => {
  try {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await userSeeder();
  console.log('\n----- USER SEEDED -----\n');
  
  await childSeeder();
  console.log('\n----- CHILD SEEDED -----\n');

  await choreSeeder();
  console.log('\n----- CHORE SEEDED -----\n');

  await notificationSeeder();
  console.log('\n----- NOTIFICATION SEEDED -----\n');

  await prizeSeeder();
  console.log('\n----- PRIZE SEEDED -----\n');

  await childPrizeSeeder();
  console.log('\n----- CHILD-PRIZE SEEDED -----\n');
  
  process.exit(0);
  } catch (error) {
  console.error('Error seeding database:', error);
  process.exit(1);
  }
  };
  
  seedAll();