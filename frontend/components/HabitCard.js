import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HabitCard({ habit }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{habit.title}</Text>
      <Text style={styles.detail}>
        Duration: {habit.duration} min | {habit.completed ? '✅ Completed' : '❌ Pending'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  detail: { fontSize: 14, color: '#555' },
});
