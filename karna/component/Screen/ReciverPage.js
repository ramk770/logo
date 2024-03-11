import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import localhost from '../../confix';

const ReciverPage = ({ navigation }) => {
  const [nonVegData, setNonVegData] = useState([]);
  const [vegData, setVegData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (selectedCategory === 'nonveg') {
      fetchNonVegData();
    } else if (selectedCategory === 'veg') {
      fetchVegData();
    }
  }, [selectedCategory]);

  const fetchNonVegData = async () => {
    try {
      const response = await axios.get(`http://${localhost}/api/v1/nonveg`);
      setNonVegData(response.data.data.nonveg);
    } catch (error) {
      console.error('Error fetching non-veg data: ', error);
    }
  };

  const fetchVegData = async () => {
    try {
      const response = await axios.get(`http://${localhost}/api/v1/veg`);
      setVegData(response.data.data.veg);
    } catch (error) {
      console.error('Error fetching veg data: ', error);
    }
  };

  const renderVeg = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title} onPress={() => navigation.navigate("showreciver")}>{item.name}</Text>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.subtitle}>{item.hotel}</Text>
          <Text style={styles.subtitle}>{item.location}</Text>
        </View>
      </View>
    );
  }

  const renderNonVeg = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title} onPress={() => navigation.navigate("showreciver")}>{item.name}</Text>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.subtitle}>{item.hotel}</Text>
          <Text style={styles.subtitle}>{item.location}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
    <View style={{backgroundColor:"orange"}}>

    
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={25} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>RECIVER</Text>
        <FontAwesome name="user" size={25} color="black" />
      </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => setSelectedCategory('nonveg')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Nonveg</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory('veg')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Veg</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Feedback")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Feedback</Text>
          </View>
        </TouchableOpacity>
      </View>
      {selectedCategory === 'nonveg' && (
        <FlatList
          data={nonVegData}
          keyExtractor={(item) => item.name.toString()}
          renderItem={renderNonVeg}
        />
      )}
      {selectedCategory === 'veg' && (
        <FlatList
          data={vegData}
          keyExtractor={(item) => item.name.toString()}
          renderItem={renderVeg}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 40,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  headerTitle: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    marginTop: 10
  },
  button: {
    width: 100,
    height: 37,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 35,
      height: 35,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 5,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "300",
    color: 'black',
    textAlign: "center",
    padding: 8
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20
  },
  image: {
    width: 200,
    height: 200,
    marginRight: 10
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  date: {
    fontSize: 14
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ReciverPage;

