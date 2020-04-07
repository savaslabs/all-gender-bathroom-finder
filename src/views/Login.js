import React, { useState, useContext } from 'react';
import Firebase from '../../firebase';
import { AuthContext } from '../../App';

import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
} from 'react-native';

export function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Auth = useContext(AuthContext);

  const handleLogin = () => {
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        if (res.user) {
          Auth.setLoggedIn(true);
          navigation.navigate('Profile');
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={(email) => setEmail(email)}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Button
        title="Don't have an account yet? Sign up"
        onPress={() => navigation.navigate('Register')}
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

export default Login;
