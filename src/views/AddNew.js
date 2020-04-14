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

  /* @TODO: Don't immediately set the location in Firebase.
     Take the place information, then take other information
     from the user form that doesn't exist yet to actually post
     to Firestore.

     1. Create state variables for place information.
     2. After person selects a place, provide feedback with
     place information asking if it's correct.
     3. Add form items asking about type of bathroom, if it is
     accessible, and if it has a changing table.
  */
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
