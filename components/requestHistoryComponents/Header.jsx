import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={20} color="#007E7E" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Request History</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginVertical: 10,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#007E7E',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
});

export default Header;
