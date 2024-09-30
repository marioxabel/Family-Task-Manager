import express, { Router } from "express";
import Parent from "../models/parent.js";
import Child from "../models/child.js";

const router = Router();

// POST /register - Register a new child or parent
router.post('/', async (req, res) => {
    const { first_name, last_name, email, password, type } = req.body;
    
    if (!type) {
        return res.status(400).json({ message: 'To register a user, you must set a type (parent/child)' });
    }

    try {
        if (type === 'child') {
            const { parent_key } = req.body 
            if (!parent_key) {
                return res.status(400).json({ message: 'To register a child, you must provide a parent_key' });
            }
            // Logic to search parents db for that parent_key and extract the id id
            const parent = await Parent.findOne({ where: { parent_key } });
            if (!parent) {
                return res.status(404).json({ message: 'Parent not found' });
            }
            // If the user is a child, register the child
            const newChild = await Child.create({ first_name, last_name, email, password, parent_id: parent.id });
            return res.status(201).json(newChild);
        } else if (type === 'parent') {
            // If the user is a parent, register the parent
            const newParent = await Parent.create({ first_name, last_name, email, password });
            return res.status(201).json(newParent);
        } else {
            return res.status(400).json({ message: 'Invalid type. Type must be either "parent" or "child".' });
        }
    } catch (error) {
        console.error(error);
        return res.status(400).json({ message: error.message });
    }
});

export { router as registerRouter };
