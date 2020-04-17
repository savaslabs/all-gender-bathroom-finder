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
 */

import React, { useContext, useEffect } from 'react';
import { Button, Text, View, Picker, Switch } from 'react-native';
import PlacesAutocompleteInput from '../components/search/PlacesAutocompleteInput';
import { AuthContext } from '../context/AuthContext';
import { PlaceContext } from '../context/PlaceContext';
import {
  getBathroomTypes,
  setLocationInFirestore,
} from '../services/firestore-service';

import PlacePreview from '../components/add/PlacePreview';
import BathroomTypePicker from '../components/add/BathroomTypePicker';

export default function AddNew({ navigation: { navigate } }) {
  const Auth = useContext(AuthContext);
  const Place = useContext(PlaceContext);

  useEffect(() => {
    getBathroomTypes().then((bathroomList) => {
      Place.setBathroomTypes(bathroomList);
    });
  }, []);

  const onPlaceSelect = (place) => {
    Place.setPreview(`${place.result.name}\n${place.result.vicinity}`);
    Place.createLocationFromGooglePlace(place);
  };

  const handleSubmit = () => {
    setLocationInFirestore(Place.placeId, Place.newPlace);
    Place.resetPlace();
    navigate('AddSuccess');
  };

  return (
    <View style={{ marginTop: 50 }}>
      {Auth.isLoggedIn ? (
        <View>
          <PlacesAutocompleteInput
            handleSelection={(place) => onPlaceSelect(place)}
            queryFields={
              'place_id,name,vicinity,formatted_address,formatted_phone_number,types,website'
            }
            queryTypes={'establishment'}
          />
          <PlacePreview />
          <Text>What type of bathroom is at this location?</Text>
          <BathroomTypePicker />
          <Text>Is this bathroom accessible?</Text>
          <Switch
            value={Place.newPlace.accessible}
            onValueChange={(value) =>
              Place.setNewPlace({ ...Place.newPlace, accessible: value })
            }
          ></Switch>
          <Text>Does this bathroom have a changing table available?</Text>
          <Switch
            value={Place.newPlace.changing_table}
            onValueChange={(value) =>
              Place.setNewPlace({ ...Place.newPlace, changing_table: value })
            }
          ></Switch>
          <Button title="Add Location" onPress={() => handleSubmit()} />
          <Button title="Start over" onPress={() => Place.resetPlace()} />
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
