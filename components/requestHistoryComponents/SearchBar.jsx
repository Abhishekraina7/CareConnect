import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({ searchText, onSearch }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Search with date/request/time..."
        style={styles.searchInput}
        placeholderTextColor="#808080"
        value={searchText}
        onChangeText={onSearch}
      />
      <Icon name="search" size={20} color="#007E7E" style={styles.searchIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#000',
  },
  searchIcon: {
    marginLeft: 5,
  },
});

export default SearchBar;
