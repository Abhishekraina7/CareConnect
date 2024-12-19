import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ScrollIcon = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.scrollIcon} onPress={onPress}>
      <Text style={styles.scrollText}>▲</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  scrollIcon: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#007E7E',
    elevation: 5,
  },
  scrollText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    transform: [{ rotate: '180deg' }],
  },
});

export default ScrollIcon;
