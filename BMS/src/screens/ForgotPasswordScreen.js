import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { TextInput } from '../components/TextInput';
import { Button } from '../components/button';
import { colors } from '../utils/colors';

export const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleForgotPasswordPress = () => {
    // Handle forgot password logic here
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoidingView}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Forgot Password</Text>
            <Text style={styles.subHeader}>We’ll send you a code to your email</Text>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.intext}>Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder="email@bmsce.ac.in"
              value={email}
              onChangeText={setEmail}
              mode="outlined"
              theme={{
                colors: {
                  primary: colors.gray2,
                  underlineColor: 'transparent',
                },
              }}
            />
            <Button
              title="CONTINUE"
              onPress={handleForgotPasswordPress}
              style={styles.button}
              labelStyle={{ color: colors.white }}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollView: {
    flexGrow: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: -80, 
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.pure,
  },
  subHeader: {
    top:20,
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 10, 
  },
  formContainer: {
    marginVertical: 150, 
  },
  button: {
    marginTop: 10, 
    backgroundColor: colors.pure,
    height: 50,
  },
  intext: {
    fontSize: 16,
    fontWeight: '600',
  },
  textInput: {
    width: '100%',
    height: 40,
    marginBottom: 10, 
  },
});

export default ForgotPasswordScreen;
