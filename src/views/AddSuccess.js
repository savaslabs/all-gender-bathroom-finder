/**
 * @file
 *
 * AddSucess screen.
 *
 * Screen to guide users to next action after adding
 * a new location.
 *
 */

import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function Profile({ navigation: { navigate } }) {
  const Auth = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Location was added successfully! What's next?</Text>
      <Button title="Add another" onPress={() => navigate('AddNew')} />
      <Button title="Go Home" onPress={() => navigate('Home')} />
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
