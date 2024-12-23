import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';

const TaskManagerScreen = () => {
  const router = useRouter();
  const [isCompleted, setIsCompleted] = useState(false); // State to toggle between Current and Completed

  const currentTasks = [
    { id: 1, name: 'Shivam', request: 'Requested a wheelchair', time: '10:30 AM', date: '10.12.2024', priority: true},
    { id: 2, name: 'Sarvesh', request: 'Requested re-bandaging', time: '1:15 PM', date: '07.12.2024', priority: false},
  ];

  const completedTasks = [
    { id: 3, name: 'Purbasa', request: 'Please bring me a wheelchair', time: '11:30 AM', date: '03.12.2024'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Back button navigates to NurseScreen */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/nurseScreen')}>
             <Icon name="chevron-left" size={20} color="#007E7E" />
             <Text style={styles.backText}>Back</Text>
           </TouchableOpacity>

      {/* Slider Button */}
      <View style={styles.sliderContainer}>
        <TouchableOpacity
          style={[styles.sliderButton, !isCompleted && styles.activeSlider]}
          onPress={() => setIsCompleted(false)}
        >
          <Text style={[styles.sliderText, !isCompleted && styles.activeText]}>Current</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sliderButton, isCompleted && styles.activeSlider]}
          onPress={() => setIsCompleted(true)}
        >
          <Text style={[styles.sliderText, isCompleted && styles.activeText]}>Completed</Text>
        </TouchableOpacity>
      </View>

      {/* Task List */}
      <ScrollView contentContainerStyle={styles.taskList}>
        {isCompleted ? (
          completedTasks.map((task) => (
            <View key={task.id} style={styles.completedTask}>
              <Text style={styles.completedText}>{task.name}, {task.request}</Text>
              <Text style={styles.completedDetails}>{task.time} - {task.date}</Text>
            </View>
          ))
        ) : (
          currentTasks.map((task) => (
            <View key={task.id} style={[styles.currentTask, task.priority && styles.priorityTask]}>
              <Text style={styles.currentText}>{task.name}, {task.request}</Text>
              <Text style={styles.currentDetails}>{task.time} - {task.date}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  backText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#007E7E',
  },
  sliderContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF', // Grey background for the slider
    borderRadius: 8,
    padding: 4,
    marginBottom: 16,
  },
  sliderButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeSlider: {
    backgroundColor: '#006400', // Green background for the active tab
    borderColor: '#006400',
    borderWidth: 2,
  },
  sliderText: {
    color: '#000', // Grey text for inactive tabs
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeText: {
    color: '#FFF', // White text for active tabs
  },
  taskList: {
    paddingBottom: 60,
  },
  currentTask: {
    backgroundColor: '#E8F5E9',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
  },
  priorityTask: {
    backgroundColor: '#FFCDD2',
  },
  currentText: {
    fontWeight: 'bold',
  },
  currentDetails: {
    color: '#777',
  },
  completedTask: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
  },
  completedText: {
    color: '#333',
  },
  completedDetails: {
    color: '#777',
  },
});

export default TaskManagerScreen;
