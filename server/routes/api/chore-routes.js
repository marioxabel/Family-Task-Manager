import express from 'express';
<<<<<<< HEAD
import Chore from '../../models/chore.js';
=======
import Chore from '../../models/chore.js';  // Assuming Chore model is correctly imported

>>>>>>> main

const router = express.Router();

// GET /chores - Get all chores
<<<<<<< HEAD
router.get('/', async (_req, res) => {
  try {
    const chores = await Chore.findAll();
    res.json(chores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /chores/:id - Get a chore by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const chore = await Chore.findByPk(id);
    if (!chore) {
      return res.status(404).json({ message: 'Chore not found' });
    }
    res.json(chore);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /chores/:parent_id - Get chores by parent
router.get('/parent/:id', async (req, res) => {
    const { id } = req.params;
    try {
      // Fetch all chores where the parent_id matches the given parent ID
      const chores = await Chore.findAll({ where: { parent_id: id } });
      
      if (chores.length > 0) {
        res.json(chores);
      } else {
        res.status(404).json({ message: 'No chores found for this parent' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

// GET /chores/:child_id - Get chores by child
router.get('/child/:id', async (req, res) => {
    const { id } = req.params;
    try {
      // Fetch all chores where the parent_id matches the given parent ID
      const chores = await Chore.findAll({ where: { child_id: id } });
      
      if (chores.length > 0) {
        res.json(chores);
      } else {
        res.status(404).json({ message: 'No chores found for this parent' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

// POST /chores - Create a new chore
router.post('/', async (req, res) => {
  const { name, description, status, parent_id, child_id } = req.body;
  if (!name || !description || !status || !parent_id || !child_id) {
    return res.status(400).json({ message: 'Chore information incomplete' });
  }
  try {
    const newChore = await Chore.create({ name, description, status, parent_id, child_id });
    res.status(201).json(newChore);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT /chores/:id - Update a chore by id
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, status, parent_id, child_id } = req.body;
  try {
    const chore = await Chore.findByPk(id);
    if (!chore) {
      return res.status(404).json({ message: 'Chore not found' });
    }
    chore.name = name;
    chore.description = description;
    chore.status = status;
    chore.parent_id = parent_id;
    chore.child_id = child_id;
    await chore.save();
    res.json(chore);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE /chores/:id - Delete a chore by id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const chore = await Chore.findByPk(id);
    if (!chore) {
      return res.status(404).json({ message: 'Chore not found' });
    }
    await chore.destroy();
    res.json({ message: 'Chore deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export { router as choresRouter };
=======
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
>>>>>>> main
