import { View, Text, StyleSheet } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

export default function TaskItem({ room, bed, request, isUrgent = false, onRightSwipe }) {
    const renderRightActions = () => (
        <View style={styles.deleteContainer}>
            <Text style={styles.deleteText}>Complete</Text>
        </View>
    );

    return (
        <Swipeable
            renderRightActions={renderRightActions}
            onSwipeableRightOpen={onRightSwipe} // Trigger when swiped
        >
            <View style={[styles.container, isUrgent && styles.urgentTask]}>
                <Text style={styles.locationText}>{room}, {bed}</Text>
                <Text style={styles.requestText}>{request}</Text>
            </View>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8F5E9',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
    },
    urgentTask: {
        backgroundColor: '#FFCDD2',
    },
    locationText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
    },
    requestText: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    deleteContainer: {
        backgroundColor: '#FF6347',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        borderRadius: 10,
    },
    deleteText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});                                                                                                                                                                                                                                                            import React from 'react';
