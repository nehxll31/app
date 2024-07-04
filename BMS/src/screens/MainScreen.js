import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import { colors } from '../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const categories = [
  {
    id: '1',
    title: 'Breakfast',
    image: require('../assets/breakfast.jpg'),
    description: 'South Indian breakfast',
  },
  {
    id: '2',
    title: 'Chinese',
    image: require('../assets/chinese.jpg'),
    description: 'Chinese dishes',
  },
  {
    id: '3',
    title: 'Beverages',
    image: require('../assets/beverages.jpg'),
    description: 'Fresh drinks',
  },
  {
    id: '4',
    title: 'Short Eats',
    image: require('../assets/snacks.jpg'),
    description: 'Snacks',
  },
];

const topPicks = [
  { id: '1', title: 'Omelette', image: require('../assets/omelette.jpg') },
  { id: '2', title: 'Samosa', image: require('../assets/samosa.jpg') },
  {
    id: '3',
    title: 'Veg Fry Maggi',
    image: require('../assets/veg-fry-maggi.jpg'),
  },
  { id: '4', title: 'Vada Pav', image: require('../assets/vada-pav.jpg') },
];

const popularDishes = [
  { id: '1', title: 'Egg Rice', image: require('../assets/dish1.jpg') },
  { id: '2', title: 'Masala Dosa', image: require('../assets/dish2.jpg') },
  { id: '3', title: 'Black Coffee', image: require('../assets/dish3.jpg') },
  {id: '4', title: 'Lemon Tea', image: require('../assets/lemon-tea.jpg')},
];

const MainScreen = ({ navigation }) => {
  const [location, setLocation] = useState('');
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderCategoryItem = ({ item }) => (
    <View style={styles.categoryItem}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryTitle}>{item.title}</Text>
      <Text style={styles.categoryDescription}>{item.description}</Text>
    </View>
  );

  const renderTopPickItem = ({ item }) => (
    <View style={styles.topPickItem}>
      <Image source={item.image} style={styles.topPickImage} />
      <Text style={styles.topPickTitle}>{item.title}</Text>
    </View>
  );

  const renderPopularDishItem = ({ item }) => (
    <View style={styles.popularDishItem}>
      <Image source={item.image} style={styles.popularDishImage} />
      <Text style={styles.popularDishTitle}>{item.title}</Text>
    </View>
  );

  const translateY = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.header}>
          <RNPickerSelect
            onValueChange={(value) => setLocation(value)}
            items={[
              {
                label: 'Vidhyarthi Khaana, Mechanical block',
                value: 'Vidhyarthi Khaana, Mechanical block',
              },
              {
                label: 'Vidhyarthi Khaana, Sports Complex',
                value: 'Vidhyarthi Khaana, Sports Complex',
              },
            ]}
            style={pickerSelectStyles}
            placeholder={{ label: 'Select a location...', value: null }}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shop by categories</Text>
          <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatList}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top picks for you</Text>
          <FlatList
            data={topPicks}
            renderItem={renderTopPickItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatList}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Dishes</Text>
          <FlatList
            data={popularDishes}
            renderItem={renderPopularDishItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatList}
          />
        </View>
      </ScrollView>

      <Animated.View style={[styles.bottomBar, { transform: [{ translateY }] }]}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Icon name="home-outline" size={24} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => alert('Search')}>
          <Icon name="search-outline" size={24} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
          <Icon name="person-circle-outline" size={27} color={colors.white} />
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    padding: 16,
    paddingTop: 50, 
    borderColor:colors.gray2
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.pure,
    paddingLeft: 16,
    marginBottom: 10,
  },
  flatList: {
    paddingLeft: 16,
  },
  categoryItem: {
    marginRight: 16,
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },
  categoryDescription: {
    fontSize: 14,
    color: colors.gray,
  },
  topPickItem: {
    marginRight: 16,
    alignItems: 'center',
  },
  topPickImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  topPickTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
  },
  popularDishItem: {
    marginRight: 16,
    alignItems: 'center',
  },
  popularDishImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  popularDishTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: colors.pure,
    padding: 10,
    justifyContent: 'space-around',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    marginBottom: 16, // to bring the picker down
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    marginBottom: 16, // to bring the picker down
  },
});

export default MainScreen;
