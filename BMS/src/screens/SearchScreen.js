import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = () => {
   
    console.log('Searching for:', searchQuery);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search products"
        onChangeText={(text) => setSearchQuery(text)}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    bottom:350,
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
});

export default SearchScreen;
