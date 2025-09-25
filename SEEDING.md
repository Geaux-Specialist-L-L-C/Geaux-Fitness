SEEDING.md
# 🌱 Database Seeding Guide

This guide helps you populate your MongoDB database with **sample users, habits, subscriptions, and revenue data** for local testing and demo purposes.

---

## 🧩 1. Setup

Ensure MongoDB is running via Docker Compose:

```bash
docker-compose up -d mongo


Install backend dependencies (if not already installed):

cd backend
npm install

🌱 2. Run Seeder

Execute the seeding script:

cd backend
node seed.js


You should see:

✅ Database seeded successfully!

🧹 3. Reset Database (Optional)

To clear the database before reseeding:

cd backend
node seed.js --clear

📊 4. What It Seeds

Users – Sample users with name, email, and role.

Habits – Fitness habits (running, pushups, water tracking).

Tasks – Random completion data for each habit.

Subscriptions – Demo subscription and affiliate sales.

Revenue & Engagement – Sample metrics for dashboard visualization.

⚠️ Warning

Do not run this in production!
This script is for development/testing only and will delete existing data.


---

## 📄 **backend/seed.js**

```javascript
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Task from './models/Task.js';
import Subscription from './models/Subscription.js';

dotenv.config();

const users = [
  { name: 'John Doe', email: 'john@example.com' },
  { name: 'Jane Smith', email: 'jane@example.com' },
];

const habits = [
  'Morning Run',
  'Pushups',
  'Drink Water',
  'Meditation',
  'Stretching',
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/fitnessapp');
    console.log('✅ Connected to MongoDB');

    if (process.argv.includes('--clear')) {
      await User.deleteMany();
      await Task.deleteMany();
      await Subscription.deleteMany();
      console.log('🧹 Cleared existing data');
    }

    const createdUsers = await User.insertMany(users);
    console.log(`👥 Created ${createdUsers.length} users`);

    const createdTasks = [];
    for (const user of createdUsers) {
      habits.forEach((habit) => {
        createdTasks.push({
          userId: user._id,
          name: habit,
          duration: Math.floor(Math.random() * 30) + 10,
          completed: Math.random() > 0.3,
        });
      });
    }

    await Task.insertMany(createdTasks);
    console.log(`✅ Created ${createdTasks.length} tasks`);

    const subscription = await Subscription.create({
      userId: createdUsers[0]._id,
      plan: 'Pro',
      status: 'active',
      revenue: 29.99,
    });

    console.log(`💳 Created subscription for ${subscription.userId}`);
    console.log('🎉 Database seeded successfully!');
    process.exit();
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  }
}

seedDatabase();

📄 backend/models/Subscription.js
import mongoose from 'mongoose';

const SubscriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  plan: { type: String, default: 'Free' },
  status: { type: String, enum: ['active', 'inactive', 'canceled'], default: 'active' },
  revenue: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model('Subscription', SubscriptionSchema);

📄 backend/models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
}, { timestamps: true });

export default mongoose.model('User', UserSchema);

📄 backend/models/Task.js
import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String,
  duration: Number,
  completed: Boolean,
}, { timestamps: true });

export default mongoose.model('Task', TaskSchema);

🔧 Usage Summary

Copy these files into your /backend folder.

Add User.js, Task.js, and Subscription.js into /backend/models/.

Run node seed.js to populate your database.

Open your dashboard — you should now see sample tasks, subscriptions, and revenue metrics populated.