import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRouter, useNavigation } from 'expo-router';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const events = [
  { id: '1', title: 'Career Fair', time: '15:00 - 15:30', bgColor: '#F9F9F9' },
  { id: '2', title: 'Group Fitness Class', time: '11:00 - 11:30', bgColor: '#FDEAE7' },
  { id: '3', title: 'Art Exhibit', time: '14:00 - 15:00', bgColor: '#EAF4FF' },
  { id: '4', title: 'Art Exhibit', time: '14:00 - 15:00', bgColor: '#EAF4FF' },
];

export default function HomeScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false }); // Hide the default header
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/images/husky.png')} style={styles.logo} />
        <View style={styles.textContainer}>
          <Text style={styles.extraBoldText}>Good Morning,</Text>
          <Text style={styles.boldHuskyText}>Husky!</Text>
        </View>
      </View>

      {/* Search Bar */}
      <TextInput style={styles.searchBar} placeholder="Search Event..." placeholderTextColor="#FFF" />

      {/* Trending Events */}
      <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitle}>Today’s</Text>
        <Text style={styles.trendingText}>Trending Events:</Text>
      </View>

      {/* Events Grid */}
      <View style={styles.eventsGrid}>
        {events.map((event, index) => (
          <TouchableOpacity
            key={event.id}
            style={[styles.eventCard, { backgroundColor: event.bgColor }]}
            onPress={() => router.push(`/event/${event.id}`)}
          >
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventTime}>{event.time}</Text>
          </TouchableOpacity>
        ))}

        {/* View More Button Styled as a Card */}
        <TouchableOpacity style={styles.viewMoreCard} onPress={() => router.push('/events')}>
          <Text style={styles.viewMoreText}>View More</Text>
          <Text style={styles.viewMoreSubText}>+3 schedule</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => router.push('/')}>
          <FontAwesome5 name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/events')}>
          <MaterialIcons name="event" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/profile')}>
          <FontAwesome5 name="user" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Keeps logo on the left
    marginBottom: 20,
  },
  logo: {
    width: 85, 
    height: 85, 
    marginRight: 10, // Adds spacing between the logo and text
  },
  textContainer: {
    flex: 1, // Allows text to take up remaining space
    alignItems: 'flex-end', // Right-aligns text
  },
  extraBoldText: {
    fontWeight: '900', // Extra bold
    fontSize: 32, 
    color: '#3478F6',
    textAlign: 'right', // Ensures text is right-aligned
  },
  boldHuskyText: {
    fontWeight: 'bold', // Bold
    fontSize: 28, 
    color: '#3478F6',
    textAlign: 'right', // Ensures text is right-aligned
  },
  searchBar: {
    backgroundColor: '#3478F6',
    padding: 25,
    borderRadius: 15,
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFF',
  },
  sectionTitleContainer: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 35, // Matches reference image
    fontWeight: '900',
    color: '#000', // Black for "Today's"
    marginBottom: -5,
  },
  trendingText: {
    fontSize: 35, // Matches "Today's"
    fontWeight: '900',
    color: '#3478F6', // Blue color
    textDecorationLine: 'underline', // Underline for "Trending Events"
  },
  eventsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  eventCard: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
    width: '48%', // Makes two columns
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventTime: {
    fontSize: 14,
    color: '#666',
  },
  viewMoreCard: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 20,
    width: '48%', // Same size as event cards
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewMoreText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  viewMoreSubText: {
    fontSize: 12,
    color: '#AAA',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderColor: '#DDD',
  },
});

