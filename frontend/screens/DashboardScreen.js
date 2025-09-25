import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { getDashboardData } from '../utils/api';
import AnalyticsChart from '../components/AnalyticsChart';

export default function DashboardScreen() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getDashboardData();
      setData(res);
    };
    fetchData();
  }, []);

  if (!data) return <Text style={styles.loading}>Loading...</Text>;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>User Analytics & Insights</Text>

      <View style={styles.card}>
        <Text style={styles.metric}>Total Tasks: {data.analytics.totalTasks}</Text>
        <Text style={styles.metric}>
          Average Time per Task: {data.analytics.averageTimePerTask} min
        </Text>
        <Text style={styles.metric}>Completed Tasks: {data.analytics.completedTasks}</Text>
        <Text style={styles.metric}>
          Subscription Count: {data.analytics.subscriptionCount}
        </Text>
        <Text style={styles.metric}>Affiliate Sales: ${data.analytics.affiliateSales}</Text>
        <Text style={styles.metric}>Revenue: ${data.analytics.revenue}</Text>
        <Text style={styles.metric}>
          Engagement Rate: {data.analytics.engagementRate.toFixed(1)}%
        </Text>
      </View>

      <AnalyticsChart data={data.analytics} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  metric: { fontSize: 16, marginBottom: 6 },
  loading: { textAlign: 'center', marginTop: 20, fontSize: 16 },
});
