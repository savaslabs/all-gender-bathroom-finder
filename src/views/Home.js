/**
 * @file
 *
 * @todo some kind of loading component
 *
 * Home screen.
 *
 * Landing page for app. Redirects to profile when
 * logged in and provides links to various screens.
 *
 */

import React, { useEffect, useContext } from 'react';
import { Firebase } from '../../firebase';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export function Home({ navigation: { navigate } }) {
  const Auth = useContext(AuthContext);

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        Auth.setLoggedIn(true)
        navigate('Profile')
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Welcome to our bathroom finder.</Text>
      <Button
        title="Go to Results"
        onPress={() => navigate('Results')}
      />
      <Button
        title="Register"
        onPress={() => navigate('Register')}
      />
      <Button title="Login" onPress={() => navigate('Login')} />
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
});

export default Home;
