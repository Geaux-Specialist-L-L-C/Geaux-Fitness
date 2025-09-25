import express from 'express';
import Task from '../models/Task.js';

const router = express.Router();

// Get all habits
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Create habit
router.post('/', async (req, res) => {
  const newTask = await Task.create(req.body);
  res.status(201).json(newTask);
});

export default router;
