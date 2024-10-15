import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors'; // Add this line
import { sequelize } from './models/index.js';
import routes from './routes/index.js';
import path from 'node:path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.static('../client/dist'));
app.use(express.json());

// Mount routes 
// app.get('/test', (req, res) => {
//   res.send('Server is working!');
// });
app.use('/', routes); 

if (process.env.NODE_ENV === 'production') {
app.get('*', (_req, res) => {
res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})
};

// Sync database and start the server
sequelize.sync()
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
