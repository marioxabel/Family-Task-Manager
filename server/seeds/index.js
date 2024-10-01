import { sequelize } from '../models/index.js';
import { parentSeeder } from './parents-seed.js';        
import { childSeeder } from './children-seed.js';       
import { choreSeeder } from './chores-seed.js';       



const seedAll = async () => {
  try {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await parentSeeder();
  console.log('\n----- PARENTS SEEDED -----\n');
  
  await childSeeder();
  console.log('\n----- CHILDREN SEEDED -----\n');

  await choreSeeder();
  console.log('\n----- CHORES SEEDED -----\n');
  
  process.exit(0);
  } catch (error) {
  console.error('Error seeding database:', error);
  process.exit(1);
  }
  };
  
  seedAll();