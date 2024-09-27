import express from 'express';
import Chore from '../../models/chore.js';  // Assuming Chore model is correctly imported


const router = express.Router();

// GET /chores - Get all chores
router.get('/', async (req, res) => {
    try {
        const chores = await Chore.findAll();
        res.status(200).json(chores);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET /chores/:id - Get chore by ID
router.get('/:id', async (req, res) => {
    try {
        const chore = await Chore.findByPk(req.params.id);
        if (chore) {
            res.status(200).json(chore);
        } else {
            res.status(404).json({ error: 'Chore not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST /chores - Create new chore
router.post('/', async (req, res) => {
    try {
        const newChore = await Chore.create(req.body);
        res.status(201).json(newChore);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT /chores/:id - Update chore by ID
router.put('/:id', async (req, res) => {
    try {
        const chore = await Chore.findByPk(req.params.id);
        if (chore) {
            await chore.update(req.body);
            res.status(200).json(chore);
        } else {
            res.status(404).json({ error: 'Chore not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE /chores/:id - Delete chore by ID
router.delete('/:id', async (req, res) => {
    try {
        const chore = await Chore.findByPk(req.params.id);
        if (chore) {
            await chore.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Chore not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export { router as choreRouter };