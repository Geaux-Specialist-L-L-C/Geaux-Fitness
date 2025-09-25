import axios from 'axios';
import Constants from 'expo-constants';

const API_URL = Constants.expoConfig?.extra?.API_URL || 'http://localhost:5000/api';

export const getDashboardData = async () => {
  try {
    const res = await axios.get(`${API_URL}/dashboard`);
    return res.data;
  } catch (error) {
    console.error('Error fetching dashboard data', error);
    return null;
  }
};

export const getHabits = async () => {
  try {
    const res = await axios.get(`${API_URL}/habits`);
    return res.data;
  } catch (error) {
    console.error('Error fetching habits', error);
    return [];
  }
};
