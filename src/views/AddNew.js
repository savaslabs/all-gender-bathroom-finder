/**
 * @file WORK IN-PROGRESS
 *
 * Add new location page.
 *
 * User can use the autocomplete input to search for a
 * location. We take that result (along with user
 * supplied information) to create a new document in our
 * Firebase db.
 *
 */

import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

import AddNewForm from '../components/add/AddNewForm';

export default function AddNew({ navigation: { navigate } }) {
  const Auth = useContext(AuthContext);

  return (
    <View style={{ marginTop: 50 }}>
      {Auth.isLoggedIn ? (
        <AddNewForm />
      ) : (
        <Text>
          Please <Button title="log in" onPress={() => navigate('Login')} /> or{' '}
          <Button
            title="create an account"
            onPress={() => navigate('Register')}
          />{' '}
          to submit new locations.
        </Text>
      )}
    </View>
  );
}
