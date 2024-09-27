import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { sequelize } from './models/index.js';  // Adjusting the import to point to models/index.js

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.static('../client/dist'));
app.use(express.json());

// Sync database
sequelize.sync({ force: true })  
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is live at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to sync the database:', err);
  });

  // Error handling for server
app.on('error', (err) => {
  console.error('Server error:', err);
});