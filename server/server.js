import dotenv from 'dotenv'
dotenv.config();

import express from 'express';
import { sequelize } from './models/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('../client/dist'));
app.use(express.json());

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is live at http://localhost:${PORT}`);
    });
});