import React, { useState, useContext } from 'react';
import { withNavigation } from 'react-navigation';
import { Firebase } from '../../../firebase';
import { AuthContext } from '../../context/AuthContext';
import { Email, Password } from './Input';

import { View, StyleSheet, Text, Button } from 'react-native';

export function LoginForm({ navigation: { navigate } }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Auth = useContext(AuthContext);

  const handleLogin = () => {
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        if (res.user) {
          Auth.setLoggedIn(true);
          navigate('Profile');
        }
      })
      .catch((err) => {
        Auth.setError(err.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text>{Auth.message}</Text>
      <View accessibilityRole="form">
        <Email
          style={styles.inputBox}
          onChangeText={(val) => setEmail(val)}
          onSubmitEditing={handleLogin}
          value={email}
        />
        <Password
          style={styles.inputBox}
          onChangeText={(val) => setPassword(val)}
          onSubmitEditing={handleLogin}
          value={password}
        />
      </View>
      <Button title="Log In" onPress={handleLogin} />
      <Text>{Auth.error}</Text>
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

export default withNavigation(LoginForm);
