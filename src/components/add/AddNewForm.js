/**
 * @file WORK IN-PROGRESS
 *
 * Add new location form.
 *
 * Form for users adding new location.
 *
 */

import React, { useContext, useEffect } from 'react';
import { Button, Text, View, Switch } from 'react-native';
import { withNavigation } from 'react-navigation';

import { PlaceContext } from '../../context/PlaceContext';
import {
  getBathroomTypes,
  setLocationInFirestore,
} from '../../services/firestore-service';

import PlacesAutocompleteInput from '../search/PlacesAutocompleteInput';
import PlacePreview from './PlacePreview';
import BathroomTypePicker from './BathroomTypePicker';

export function AddNewForm({ navigation: { navigate } }) {
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
  );
}

export default withNavigation(AddNewForm);
