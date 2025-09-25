import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Task from '../models/Task.js';

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB for seeding');

    await User.deleteMany();
    await Task.deleteMany();

    const user = await User.create({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'hashedpassword',
      subscription: 'premium',
      affiliateEarnings: 120,
    });

    await Task.create([
      { userId: user._id, title: 'Morning Run', duration: 30, completed: true },
      { userId: user._id, title: 'Meditation', duration: 15, completed: false },
      { userId: user._id, title: 'Strength Training', duration: 45, completed: true },
      { userId: user._id, title: 'Evening Walk', duration: 20, completed: true },
    ]);

    console.log('✅ Seed data created successfully');
    process.exit();
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
