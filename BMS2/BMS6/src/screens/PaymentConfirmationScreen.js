import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import { colors } from '../utils/colors';

const PaymentConfirmationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Payment Confirmation" />
      </Appbar.Header>
      <View style={styles.content}>
        <Text style={styles.confirmationText}>Payment Confirmed!</Text>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('MainScreen')}
          style={styles.homeButton}
        >
          Go to Home
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmationText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  homeButton: {
    marginTop: 20,
    paddingHorizontal: 20,
   backgroundColor:colors.green
  },
});

export default PaymentConfirmationScreen;
