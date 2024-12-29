import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';

const DateItem = ({ day, weekday, isSelected, onSelect }) => (
    <TouchableOpacity
        style={[styles.dateItem, isSelected && styles.selectedDate]}
        onPress={onSelect}
    >
        <Text style={[styles.dayNumber, isSelected && styles.selectedText]}>
            {day}
        </Text>
        <Text style={[styles.weekday, isSelected && styles.selectedText]}>
            {weekday}
        </Text>
    </TouchableOpacity>
);

export default function DateSelector() {
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [dates, setDates] = React.useState([]);

    React.useEffect(() => {
        const today = new Date();
        const generatedDates = Array.from({ length: 7 }, (_, index) => {
            const date = new Date(today);
            date.setDate(today.getDate() + index - 3); // Center the current date
            const day = date.getDate();
            const weekday = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
            return { day, weekday };
        });
        setDates(generatedDates);
        setSelectedDate(today.getDate()); // Select today's date by default
    }, []);

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
            {dates.map((date, index) => (
                <DateItem
                    key={index}
                    day={date.day}
                    weekday={date.weekday}
                    isSelected={selectedDate === date.day}
                    onSelect={() => setSelectedDate(date.day)}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 0,
        marginVertical: 10,
    },
    dateItem: {
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 15,
        width: 60,
    },
    selectedDate: {
        backgroundColor: '#008B8B',
    },
    dayNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    weekday: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
    },
    selectedText: {
        color: '#fff',
    },
});