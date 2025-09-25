import express from 'express';
import { getDashboardData } from '../services/DashboardService.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const userId = req.query.userId; // Replace with req.user._id if auth middleware
    const data = await getDashboardData(userId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dashboard data', error });
  }
});

export default router;
