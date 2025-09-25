import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import dashboardRoutes from './routes/DashboardRoute.js';
import habitRoutes from './routes/HabitRoute.js';
import userRoutes from './routes/UserRoute.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

// Routes
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/habits', habitRoutes);
app.use('/api/users', userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error('❌ MongoDB connection error:', err));
