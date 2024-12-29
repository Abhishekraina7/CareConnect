import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TaskManagerScreen() {
    const [completedTasks, setCompletedTasks] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchCompletedTasks = async () => {
            try {
                const tasks = await AsyncStorage.getItem('completedTasks');
                if (tasks) setCompletedTasks(JSON.parse(tasks));
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchCompletedTasks();
    }, []);

    const deleteTask = async (taskToDelete) => {
        try {
            const updatedTasks = completedTasks.filter((task) => task !== taskToDelete);
            setCompletedTasks(updatedTasks);
    
           
            await AsyncStorage.setItem('completedTasks', JSON.stringify(updatedTasks));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };
    
  
  const renderTask = ({ item }) => (
      <View style={styles.taskBox}>
          <View style={{ flex: 1 }}>
              <Text style={styles.text}>Room: {item.room}</Text>
              <Text style={styles.text}>Bed: {item.bed}</Text>
              <Text style={styles.text}>Request: {item.request}</Text>
              <Text style={styles.text}>Urgent: {item.isUrgent ? 'Yes' : 'No'}</Text>
          </View>
          <TouchableOpacity onPress={() => deleteTask(item)} style={styles.deleteButton}>
              <Icon name="trash" size={20} color="#fff" />
          </TouchableOpacity>
      </View>
  );

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.push('/nurseScreen')}>
                <Icon name="chevron-left" size={20} color="#007E7E" />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.header}>Completed Tasks</Text>
            <FlatList
                data={completedTasks}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderTask}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backText: {
        marginLeft: 5,
        fontSize: 16,
        color: '#007E7E',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    taskBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 3,
    },
    text: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 5,
        fontWeight: '500',
    },
    deleteButton: {
        marginLeft: 10,
        backgroundColor: '#FF6347',
        padding: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
