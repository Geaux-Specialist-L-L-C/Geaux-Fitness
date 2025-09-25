import Task from '../models/Task.js';
import User from '../models/User.js';

export const getDashboardData = async (userId) => {
  const tasks = await Task.find({ userId });
  const user = await User.findById(userId);

  const totalDuration = tasks.reduce((sum, t) => sum + t.duration, 0);

  return {
    analytics: {
      totalTasks: tasks.length,
      averageTimePerTask: tasks.length ? totalDuration / tasks.length : 0,
      completedTasks: tasks.filter((t) => t.completed).length,
      subscriptionCount: user?.subscription === 'premium' ? 1 : 0,
      affiliateSales: user?.affiliateEarnings || 0,
      revenue: user?.subscription === 'premium' ? 20 : 0, // Example revenue
      engagementRate: tasks.length ? (tasks.filter((t) => t.completed).length / tasks.length) * 100 : 0,
    },
    userInsights: {
      name: user?.name,
      email: user?.email,
      tasks: tasks.length,
      subscriptions: user?.subscription,
      affiliatePromotions: user?.affiliateEarnings,
      revenue: user?.subscription === 'premium' ? 20 : 0,
      engagementRate: tasks.length ? (tasks.filter((t) => t.completed).length / tasks.length) * 100 : 0,
    },
  };
};
