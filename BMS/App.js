import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'react-native';
import { colors } from './src/utils/colors'; // Adjust import path as per your project structure
import SplashScreen from './src/screens/SplashScreen'; // Adjust import path as per your project structure
import Focus from './src/features/Focus';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import MainScreen from './src/screens/MainScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AboutScreen from './src/screens/AboutScreen';
import TrackOrderScreen from './src/screens/TrackOrderScreen';
import DrinksListScreen from './src/screens/DrinksListScreen';
import CartScreen from './src/screens/CartScreen';
import BreakfastListScreen from './src/screens/BreakfastListScreen';
import SearchScreen from './src/screens/SearchScreen';
import ChineseDishesScreen from './src/screens/ChineseDishesScreen';
import ShortEatsScreen from './src/screens/ShortEatsScreen';
import { CartProvider } from './src/context/CartContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Focus" component={Focus} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
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
            <Stack.Screen
              name="Cart"
              component={CartScreen}
              options={{
                title: 'Cart',
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
              name="BreakfastList"
              component={BreakfastListScreen}
              options={{
                title: 'Breakfast List',
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
              name="Search"
              component={SearchScreen}
              options={{
                title: 'Search',
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
              name="ChineseDishes"
              component={ChineseDishesScreen}
              options={{
                title: 'Chinese Dishes',
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
              name="ShortEats"
              component={ShortEatsScreen}
              options={{
                title: 'Short Eats',
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
      </CartProvider>
    </PaperProvider>
  );
};

export default App;
