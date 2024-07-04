import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from '../components/button';
import GoogleButton from '../components/GoogleButton';
import Divider from '../components/Divider';
import { colors } from '../utils/colors';

export const Focus = ({ navigation }) => {
  const [subject, setSubject] = useState(null);

  const handleSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  const handleGoogleSignUp = () => {
    // Google sign-up logic
  };

  const handleSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>BMS</Text>
        <Text style={styles.text2}>Vidhyarthi Khaana</Text>
        <Text style={styles.text3}>Create an account</Text>
        <Text style={styles.text4}>Enter your email to sign up </Text>
      </View>
      <View style={styles.inputWrapper}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={setSubject}
            label="email@bmsce.ac.in"
            mode="outlined"
            value={subject}
            theme={{
              colors: {
                primary: colors.gray2,
                underlineColor: 'transparent',
              },
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Sign up with email"
            onPress={handleSignUpPress}
            color={colors.white}
          />
        </View>
        <Divider text="or continue with" />
        <GoogleButton onPress={handleGoogleSignUp} style={styles.google} />
      </View>
      <View style={styles.bottomtext}>
        <Text style={styles.text5}>
          By clicking continue, you agree to our {''}
          <Text
            style={styles.link}
            onPress={() => console.log('Terms of Service pressed')}>
            Terms of Service
          </Text>
          {' '}
          and {''}
          <Text
            style={styles.link}
            onPress={() => console.log('Privacy Policy pressed')}>
            Privacy Policy
          </Text>
        </Text>
        {''}
        <Text
          style={styles.enter}
          onPress={handleSignInPress}
        >
          Already have an account? Sign in
        </Text>
        {''}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    paddingTop: 50,
    position: 'absolute',
    top: 50, 
    alignItems: 'center', 
  },
  text1: {
    color: colors.pure,
    fontSize: 32,
    fontWeight: '600',
  },
  text2: {
    color: colors.pure,
    fontSize: 28,
    fontWeight: '600',
  },
  text3: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 70,
  },
  text4: {
    fontSize: 14,
    fontWeight: '400',
  },
  text5: {
    color: '#828282',
    textAlign: 'center', 
  },
  link: {
    color: colors.black,
  },
  bottomtext: {
    top: 8,
    paddingLeft: 27,
    paddingRight: 22,
    paddingTop: 20,
    alignItems: 'center',
  },
  inputWrapper: {
    alignItems: 'center', 
    paddingBottom: 70,
    top: 69,
  },
  inputContainer: {
    width: 327,
    marginBottom: 20,
  },
  textInput: {
    width: '100%',
    height: 40,
  },
  buttonContainer: {
    width: 327,
    alignItems: 'center',
    color:colors.pure,
  },
  enter: {
    top: 175,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Focus;
