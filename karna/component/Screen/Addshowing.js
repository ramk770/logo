import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
const screen = Dimensions.get('window').width;
const data = [
    {
      id: 1,
      name: 'Hostel A',
      location: 'Location A',
      image: require('../../assets/hotel.jpg'),
    },
    {
      id: 2,
      name: 'Hostel B',
      location: 'Location B',
      image: require('../../assets/hotel.jpg'),
    },
    // Add more hostel data as needed
  ];
  
const HostelListItem = ({ item }) => (
  <View style={styles.hostelContainer}>
    <Image source={item.image} style={styles.hostelImage} />
    {/* <View style={styles.hostelInfo}>
      <Text style={styles.hostelName}>{item.name}</Text>
      <Text style={styles.hostelLocation}>{item.location}</Text>
    </View> */}
  </View>
);

function Addshowing() {
  return (
    <FlatList
      data={data}
      renderItem={HostelListItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContainer}
      horizontal={true}
     pagingEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 20,
    gap:20
  },
  hostelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width:320,
    height:210,
    backgroundColor: 'white',
    borderRadius: 10,
   
    
  },
  hostelImage: {
    width: Dimensions.get('window').width,
    resizeMode: "contain",
    borderRadius: 10,
    width:320,
    height:200,

  },
  hostelInfo: {
    flex: 1,
    marginLeft: 10,
  },
  hostelName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  hostelLocation: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Addshowing;
