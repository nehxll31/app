import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { TextInput } from '../components/TextInput';
import { Button } from '../components/button'; 
import { colors } from '../utils/colors';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rePassword, setRePassword] = React.useState('');

  const handleSignUpPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <Text style={styles.subHeader}>Please sign up to get started</Text>
      
      <Text style={styles.intext}>Name</Text>
      <TextInput
        placeholder="John Doe"
        value={name}
        onChangeText={setName}
        style={styles.input}
        theme={{
          colors: {
            primary: colors.gray2,
            underlineColor: 'transparent',
          },
        }}
      />

      <Text style={styles.intext}>Password</Text>
      <TextInput
        placeholder="********"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        theme={{
          colors: {
            primary: colors.gray2,
            underlineColor: 'transparent',
          },
        }}
      />

      <Text style={styles.intext}>Re-enter Password</Text>
      <TextInput
        placeholder="********"
        value={rePassword}
        onChangeText={setRePassword}
        secureTextEntry
        style={styles.input}
        theme={{
          colors: {
            primary: colors.gray2,
            underlineColor: 'transparent',
          },
        }}
      />

      <Button
        title="SIGN UP"
        onPress={handleSignUpPress}
        style={styles.button}
        labelStyle={{ color: colors.white }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.pure,
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
    textAlign: 'center',
    marginBottom: 20,
  },
  intext: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    marginBottom: 20,
    height: 40,
  },
  button: {
    marginTop: 20,
    backgroundColor: colors.pure,
    height: 50,
  },
});

export default SignUpScreen;
