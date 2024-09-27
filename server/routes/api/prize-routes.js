//Majo
import express from 'express';
import Prize from './prize.js';


const router = express.Router();




// GET /prizes - Get all prizes
router.get('/', async (req, res) => {
    try {
        const prizes = await Prize.findAll();
        res.status(200).json(prizes);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET /prizes/:id - Get prize by ID
router.get('/:id', async  (req, res) => {
    try {
        const prizes = await Prize.findByPk(req.params.id);
        if (prizes) {
            res.status(200).json(prizes);
        } else {
            res.status(404).json({ error: 'Prize not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST /prizes - Create new prize
router.post('/', async (req, res) => {
    try {
        const newPrize = await Prize.create(req.body);
        res.status(201).json(newPrize);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT /prizes/:id - Update prize by ID
router.put('/:id', async (req, res) => {
    try {
        const prizes = await Prize.findByPk(req.params.id);
        if (prizes) {
            await prizes.update(req.body);
            res.status(200).json(prizes);
        } else {
            res.status(404).json({ error: 'Prize not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE /prizes/:id - Delete prize by ID
router.delete('/:id', async (req, res) => {
    try {
        const prizes = await Prize.findByPk(req.params.id);
        if (prizes) {
            await prizes.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Prize not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export {router as prizeRouter};
