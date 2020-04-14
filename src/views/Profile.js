/**
 * @file
 *
 * Profile screen.
 *
 * Profile screen to be fleshed out in future.
 *
 */

import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Firebase } from '../../firebase';
import { AuthContext } from '../context/AuthContext';

export default function Profile({ navigation: { navigate } }) {
  const Auth = useContext(AuthContext);

  const signOut = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        Auth.setLoggedIn(false)
        navigate('Home')
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <Text>This is a profile screen.</Text>
      <Button title="sign out" onPress={signOut} />
      <Button title="Add a location" onPress={() => navigate('AddNew')} />
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
