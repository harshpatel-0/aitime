import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const eventDetails: Record<string, { title: string; time: string; description: string }> = {
  '1': { title: 'Career Fair', time: '15:00 - 15:30', description: 'Meet recruiters from top companies.' },
  '2': { title: 'Group Fitness Class', time: '11:00 - 11:30', description: 'Join us for a high-energy fitness session.' },
  '3': { title: 'Art Exhibit', time: '14:00 - 15:00', description: 'Explore stunning artwork from local artists.' },
  '4': { title: 'Coding Workshop', time: '16:00 - 17:00', description: 'Learn the basics of programming and software development.' },
  '5': { title: 'Entrepreneurship Panel', time: '18:00 - 19:00', description: 'Hear from successful entrepreneurs about their journeys.' },
};

export default function EventDetailScreen() {
  const { id } = useLocalSearchParams(); // Get event ID from URL params

  if (!id || typeof id !== 'string' || !eventDetails[id]) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Event not found.</Text>
      </View>
    );
  }

  const event = eventDetails[id];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.time}>{event.time}</Text>
      <Text style={styles.description}>{event.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  time: {
    fontSize: 18,
    color: '#3478F6',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 50,
  },
});
