import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RequestItem = ({ item }) => {
  return (
    <View style={[styles.requestBox, item.topBox && styles.topBox]}>
      <Text style={styles.requestText}>{item.request}</Text>
      <View style={styles.timeContainer}>
        <Icon name="clock-o" size={14} color="#000" style={{ marginRight: 5 }} />
        <Text style={styles.timeText}>{`${item.time}   ${item.date}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  requestBox: {
    backgroundColor: '#DDF3F3',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    elevation: 3,
  },
  topBox: {
    backgroundColor: '#98E1E1',
  },
  requestText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  timeText: {
    fontSize: 14,
    color: '#333',
  },
});

export default RequestItem;
