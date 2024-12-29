import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/nurseScreenComponents/Header';
import DateSelector from '../../components/nurseScreenComponents/DateSelector';
import TaskList from '../../components/nurseScreenComponents/TaskList';
import LogoutButton from '../../components/nurseScreenComponents/LogOutButton';

export default function NurseDashboardScreen() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const loadTasks = async () => {
            try {
              
                const completedTasks = JSON.parse(await AsyncStorage.getItem('completedTasks')) || [];

              
                const initialTasks = [
                    { room: 'Room 203', bed: 'Bed-8', request: 'Requested water', isUrgent: false },
                    { room: 'Room 107', bed: 'Bed-17', request: 'Requested bandages', isUrgent: false },
                    { room: 'Room 106', bed: 'Bed-23', request: 'Chest pain check-up', isUrgent: true },
                ];

               
                const filteredTasks = initialTasks.filter(
                    (task) =>
                        !completedTasks.some(
                            (completedTask) =>
                                completedTask.room === task.room &&
                                completedTask.bed === task.bed &&
                                completedTask.request === task.request
                        )
                );

                setTasks(filteredTasks);
            } catch (error) {
                console.error('Error loading tasks:', error);
            }
        };

        loadTasks();
    }, []);

    const handleTaskCompletion = async (completedTask) => {
        try {
            setTasks((prevTasks) => prevTasks.filter((task) => task !== completedTask));

            const savedTasks = JSON.parse(await AsyncStorage.getItem('completedTasks')) || [];
            const isDuplicate = savedTasks.some(
                (task) =>
                    task.room === completedTask.room &&
                    task.bed === completedTask.bed &&
                    task.request === completedTask.request
            );

            if (!isDuplicate) {
                savedTasks.push(completedTask);
                await AsyncStorage.setItem('completedTasks', JSON.stringify(savedTasks));
            }
        } catch (error) {
            console.error('Error saving task:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header name="Ritika Singh" employeeId="1234" department="Nursing" wardNo="3" />
            <DateSelector />
            <TaskList tasks={tasks} onTaskComplete={handleTaskCompletion} />
            <LogoutButton />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 5,
    },
    header: {
        marginBottom: 10,
    },
});
