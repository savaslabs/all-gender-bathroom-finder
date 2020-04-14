/**
 * @file
 *
 * Register screen.
 *
 * Renders registration form, links to login and
 * forgot password screens.
 *
 */

import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';

import { View, StyleSheet, Button } from 'react-native';

export function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <RegisterForm />
      <Button
        title="Already have an account? Sign in."
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Forgot password?"
        onPress={() => navigation.navigate('ForgotPassword')}
      />
       <Button
        title="Go back"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: '85%',
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: '#d3d3d3',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#FFA611',
    borderColor: '#FFA611',
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonSignup: {
    fontSize: 12,
  },
});

export default Register;
