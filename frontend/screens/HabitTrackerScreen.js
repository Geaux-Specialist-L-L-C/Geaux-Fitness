import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getHabits } from '../utils/api';
import HabitCard from '../components/HabitCard';

export default function HabitTrackerScreen() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const fetchHabits = async () => {
      const res = await getHabits();
      setHabits(res);
    };
    fetchHabits();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Habits</Text>
      <FlatList
        data={habits}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <HabitCard habit={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
});
