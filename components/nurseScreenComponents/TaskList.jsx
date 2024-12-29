import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import TaskItem from './TaskItem';

export default function TaskList({ tasks = [], onTaskComplete }) {
    return (
        <ScrollView style={styles.container}>
            {tasks.length > 0 ? (
                tasks.map((task, index) => (
                    <TaskItem
                        key={index}
                        {...task}
                        onRightSwipe={() => onTaskComplete(task)}
                    />
                ))
            ) : (
                <Text style={styles.emptyText}>No tasks available</Text>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#888',
    },
});
