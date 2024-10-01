import express from 'express';
import { authenticateToken } from '../../middleware/authMiddleware.js';  // Assuming authentication is required
import ChildPrize from '../../models/child_prizes.js';  // Adjust based on your project structure
import Prize from '../../models/prizes.js';
import Child from '../../models/children.js';

const router = express.Router();

// 1. POST route: Assign a prize to a child (child "buys" a prize)
router.post('/', authenticateToken, async (req, res) => {
  const { child_id, prize_id } = req.body;

  try {
    // Check if child and prize exist
    const child = await Child.findByPk(child_id);
    const prize = await Prize.findByPk(prize_id);

    if (!child || !prize) {
      return res.status(404).json({ message: 'Child or Prize not found' });
    }

    // Insert into child_prizes table
    const childPrize = await ChildPrize.create({
      child_id,
      prize_id,
      purchase_date: new Date()
    });

    return res.status(201).json({ message: 'Prize assigned to child', childPrize });
  } catch (error) {
    console.error('Error assigning prize:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// 2. GET route: Retrieve all prizes for a specific child
router.get('/:child_id', authenticateToken, async (req, res) => {
  const { child_id } = req.params;

  try {
    // Check if child exists
    const child = await Child.findByPk(child_id, {
      include: [
        {
          model: Prize,
          through: {
            model: ChildPrize,
            attributes: ['purchase_date']
          }
        }
      ]
    });

    if (!child) {
      return res.status(404).json({ message: 'Child not found' });
    }

    return res.status(200).json({ child, prizes: child.Prizes });
  } catch (error) {
    console.error('Error fetching prizes for child:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// 3. DELETE route: Remove a prize from a child (optional)
router.delete('/:child_id/:prize_id', authenticateToken, async (req, res) => {
  const { child_id, prize_id } = req.params;

  try {
    // Check if the prize assignment exists
    const childPrize = await ChildPrize.findOne({
      where: { child_id, prize_id }
    });

    if (!childPrize) {
      return res.status(404).json({ message: 'Child-Prize entry not found' });
    }

    // Delete the entry from child_prizes table
    await childPrize.destroy();

    return res.status(200).json({ message: 'Prize removed from child' });
  } catch (error) {
    console.error('Error removing prize:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
