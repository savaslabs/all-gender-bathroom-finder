/**
 * @file WORK IN-PROGRESS
 *
 * @todo
 * - Break down into smaller components
 * - Move logic either into component or firebase files.
 * - Conditional display for the Picker
 * - Handle success/error on posting to Firebase.
 *
 * Add new location page.
 *
 * User can use the autocomplete input to search for a
 * location. We take that result (along with user
 * supplied information) to create a new document in our
 * Firebase db.
 *
 * Firestore read/write data documentation:
 * https://firebase.google.com/docs/firestore/query-data/get-data
 *
 */

import React, { useContext, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Picker, Switch } from 'react-native';
import { db } from '../../firebase';
import { AuthContext } from '../context/AuthContext';

import MapInput from '../components/results/MapInput';

export default function AddNew({ navigation: { navigate } }) {
  const Auth = useContext(AuthContext);
  const [newPlace, setNewPlace] = useState({
    bathroom_type: null,
    accessible: false,
    changing_table: false
  });
  const [bathroomTypes, setBathroomTypes] = useState([]);
  const [placeId, setPlaceId] = useState('');

  const createLocationFromGooglePlace = (place) => {
    const {
      place_id,
      name,
      formatted_address,
      formatted_phone_number,
      website,
      types,
    } = place.result;


    setPlaceId(place_id)
    setNewPlace({
      ...newPlace,
      name,
      formatted_address,
      formatted_phone_number,
      website,
      types,
    });
  };

  const getBathroomTypeOptions = () => {
    let typesArr = [];
    db.collection('types')
      .get()
      .then((res) => {
        res.forEach((type) => {
          typesArr = [...typesArr, type]
        });
        setBathroomTypes(typesArr);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setLocationInFirebase = () => {
    const bathroomDoc = db.collection('bathrooms').doc(placeId);

    bathroomDoc
      .set(newPlace)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBathroomTypeOptions();
  }, [])

  return (
    <View style={{ marginTop: 50 }}>
      {Auth.isLoggedIn ? (
        <View>
          <MapInput
            handleSelection={(place) => createLocationFromGooglePlace(place)}
          />
          <Text style={{ marginTop: 150 }}>
            If this is right, provided us with some more details.{'\n'}
            {newPlace.name}
            {'\n'}
            {newPlace.formatted_address}
            {'\n'}
            {newPlace.formatted_phone_number}
          </Text>
          <Text>Select a bathroom type.</Text>
          <Picker
            selectedValue={newPlace.bathroom_type}
            style={{ width: '100%' }}
            onValueChange={(itemValue, itemIndex) =>
              setNewPlace({
                ...newPlace,
                bathroom_type: itemValue,
              })
            }
          >
            {bathroomTypes.map((type, index) => {
              return <Picker.Item key={index} label={type.data().label} value={type.id} />
            })}

          </Picker>
          <Text>Is this bathroom accessible?</Text>
          <Switch value={newPlace.accessible} onValueChange={value => setNewPlace({...newPlace, accessible: value})}></Switch>
          <Text>Does this bathroom have a changing table available?</Text>
          <Switch value={newPlace.changing_table} onValueChange={value => setNewPlace({...newPlace, changing_table: value})}></Switch>
          <Button title="Add Location" onPress={() => setLocationInFirebase()} />
        </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
