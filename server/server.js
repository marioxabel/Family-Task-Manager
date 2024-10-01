import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { sequelize } from './models/index.js';  // Adjusting the import to point to models/index.js
import routes from './routes/index.js';  // Import your routes

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.static('../client/dist'));
app.use(express.json());

// Mount routes 
app.get('/test', (req, res) => {
  res.send('Server is working!');
});
app.use('/', routes); 

// Sync database and start the server

sequelize.sync()  // Remove { force: true }
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

// app.on('listening', () => {
//   console.log('Server is listening for connections...');
// });