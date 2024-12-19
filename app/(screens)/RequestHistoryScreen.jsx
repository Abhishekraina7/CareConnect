import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

const requestData = [
  { id: '1', request: 'Requested a wheelchair', time: '10:30 a.m.', date: '10.12.2024', topBox: true },
  { id: '2', request: 'Requested re-bandaging', time: '1:15 p.m.', date: '07.12.2024', topBox: false },
  { id: '3', request: 'Please bring a glass of water', time: '7:00 p.m.', date: '06.11.2024', topBox: false },
  { id: '4', request: 'Please bring me a wheelchair', time: '11:30 a.m.', date: '03.12.2024', topBox: false },
  { id: '5', request: 'Requested a doctor visit', time: '9:00 a.m.', date: '02.12.2024', topBox: false },
  { id: '6', request: 'Requested meal assistance', time: '8:00 p.m.', date: '01.12.2024', topBox: false },
];

const RequestHistoryScreen = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [filteredRequests, setFilteredRequests] = useState(requestData);

  useEffect(() => {
    if (searchText === '') {
      setFilteredRequests(requestData);
    } else {
      const filtered = requestData.filter(
        (item) =>
          item.request.toLowerCase().includes(searchText.toLowerCase()) ||
          item.time.toLowerCase().includes(searchText.toLowerCase()) ||
          item.date.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRequests(filtered);
    }
  }, [searchText]);

  const renderItem = ({ item }) => (
    <View style={[styles.requestBox, item.topBox ? styles.topBox : null]}>
      <Text style={styles.requestText}>{item.request}</Text>
      <View style={styles.timeContainer}>
        <Icon name="clock-o" size={14} color="#000" style={{ marginRight: 5 }} />
        <Text style={styles.timeText}>{`${item.time}   ${item.date}`}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/patientScreen')}>
        <Icon name="chevron-left" size={20} color="#007E7E" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      {/* Heading */}
      <Text style={styles.heading}>Request History</Text>

      {/* Search Box */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search with date/request/time..."
          style={styles.searchInput}
          placeholderTextColor="#808080"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Icon name="search" size={20} color="#007E7E" style={styles.searchIcon} />
      </View>

      {/* Request List */}
      <FlatList
        data={filteredRequests}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 50 }}
      />

      {/* Triangle Icon for Scrolling */}
      <TouchableOpacity style={styles.scrollIcon} onPress={() => alert('Scroll to explore requests')}>
        <Text style={styles.scrollText}>▲</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 15,
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
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#000',
  },
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
  requestBox: {
    backgroundColor: '#DDF3F3',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    elevation: 3,
  },
  topBox: {
    backgroundColor: '#98E1E1', // Darker blue for the topmost box
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
    transform: [{ rotate: '180deg' }], // Triangle pointing upwards
  },
});

export default RequestHistoryScreen;
