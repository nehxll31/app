import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const drinksData = [
  {
    id: '1',
    name: 'Orange Juice',
    image: 'https://example.com/orange-juice.jpg',
  },
  {
    id: '2',
    name: 'Apple Juice',
    image: 'https://example.com/apple-juice.jpg',
  },
  {
    id: '3',
    name: 'Coca Cola',
    image: 'https://example.com/coca-cola.jpg',
  },
  {
    id: '4',
    name: 'Pepsi',
    image: 'https://example.com/pepsi.jpg',
  },
];

const DrinksListScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [quantities, setQuantities] = useState({});

  const onChangeSearch = (query) => setSearchQuery(query);

  const incrementQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };

  const decrementQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) - 1 > 0 ? prevQuantities[id] - 1 : 0,
    }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <View style={styles.quantityContainer}>
        <Button mode="outlined" onPress={() => decrementQuantity(item.id)}>
          <Ionicons name="remove" size={16} color="black" />
        </Button>
        <Text style={styles.quantityText}>{quantities[item.id] || 0}</Text>
        <Button mode="outlined" onPress={() => incrementQuantity(item.id)}>
          <Ionicons name="add" size={16} color="black" />
        </Button>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      <FlatList
        data={drinksData.filter((drink) =>
          drink.name.toLowerCase().includes(searchQuery.toLowerCase())
        )}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchBar: {
    margin: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    elevation: 2,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  itemName: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});

export default DrinksListScreen;
