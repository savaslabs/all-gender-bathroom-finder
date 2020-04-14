/**
 * @file
 *
 * Forgot password screen.
 *
 * Allows user to send reset password email.
 *
 * Firebase documentation:
 * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#send-password-reset-email
 */

import React, { useState, useContext } from 'react';
import { Firebase } from '../../firebase';
import { Email } from '../components/auth/Input';
import { AuthContext } from '../context/AuthContext';

import { View, StyleSheet, Text, Button } from 'react-native';

export function ForgotPassword({ navigation: { navigate } }) {
  const [email, setEmail] = useState('');
  const Auth = useContext(AuthContext);

  const resetPassword = () => {
    Firebase.auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Auth.setMessage('Password reset email has been sent.');
        navigate('Login');
      })
      .catch((err) => {
        Auth.setMessage(err.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text>
        Forgot your password? We can help with that. Enter your email and we'll
        send you a link to reset.
      </Text>
      <View accessibilityRole="form">
        <Email
          style={styles.inputBox}
          onChangeText={(val) => setEmail(val)}
          onSubmitEditing={resetPassword}
          value={email}
        />
        <Button title="Send reset email" onPress={resetPassword} />
        <Button title="Back to Login" onPress={() => navigate('Login')} />
      </View>
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
    backgroundColor: '#F6820D',
    borderColor: '#F6820D',
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

export default ForgotPassword;
