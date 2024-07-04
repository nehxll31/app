import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Focus from './src/features/Focus';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import MainScreen from './src/screens/MainScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AboutScreen from './src/screens/AboutScreen'; 
import TrackOrderScreen from './src/screens/TrackOrderScreen';
import DrinksListScreen from './src/screens/DrinksListScreen';
import { SafeAreaView, StyleSheet, Platform, StatusBar, Text } from 'react-native';
import { colors } from './src/utils/colors';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Focus"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Focus" component={FocusScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{
              title: 'Main Screen',
              headerStyle: {
                backgroundColor: colors.pure,
              },
              headerTintColor: colors.white,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: 'Profile',
              headerStyle: {
                backgroundColor: colors.pure,
              },
              headerTintColor: colors.white,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="About"
            component={AboutScreen}
            options={{
              title: 'About',
              headerStyle: {
                backgroundColor: colors.pure,
              },
              headerTintColor: colors.white,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
           <Stack.Screen
            name="TrackOrder"
            component={TrackOrderScreen}
            options={{
              title: 'Track Order',
              headerStyle: {
                backgroundColor: colors.pure,
              },
              headerTintColor: colors.white,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="DrinksList"
            component={DrinksListScreen}
            options={{
              title: 'Drinks List',
              headerStyle: {
                backgroundColor: colors.pure,
              },
              headerTintColor: colors.white,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

const FocusScreen = ({ navigation }) => {
  const [currentSubject, setCurrentSubject] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} navigation={navigation} />
      ) : (
        <SafeAreaView>
          <Text style={{ color: colors.pure }}>
            Open timer for {currentSubject}
          </Text>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.white,
  },
});

export default App;
