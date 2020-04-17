/**
 * @file WORK IN-PROGRESS
 *
 * Google Places autocomplete input.
 *
 * Renders input with Google Places autocomplete.
 *
 * react-native-places-input documentation:
 * https://github.com/jaing/react-native-places-input
 *
 * Place Details documentation:
 * https://developers.google.com/places/web-service/details
 *
 */

import React, { useContext } from 'react';
import { View, Text, Keyboard } from 'react-native';
import PlacesInput from 'react-native-places-input';
import { GOOGLE_API_KEY } from 'react-native-dotenv';
import { PlaceContext } from '../../context/PlaceContext';

const PlacesAutocompleteInput = (props) => {
  const Place = useContext(PlaceContext);

  const previewSelection = (place) => {
    Place.setInputVal(`${place.result.name}, ${place.result.vicinity}`);
    Keyboard.dismiss();
    props.handleSelection(place);
  };

  const handleQuery = (query, componentScope) => {
    Place.setInputVal(query);
  };

  return (
    <PlacesInput
      textInputProps={{ value: Place.inputVal }}
      googleApiKey={GOOGLE_API_KEY}
      onSelect={(place) => previewSelection(place)}
      onChangeText={(query, componentScope) =>
        handleQuery(query, componentScope)
      }
      queryFields={props.queryFields}
      queryTypes={props.queryTypes}
      stylesContainer={{
        position: 'relative',
        alignSelf: 'stretch',
        margin: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        shadowOpacity: 0,
        borderColor: '#dedede',
        borderWidth: 1,
        marginBottom: 10,
      }}
      stylesList={{
        top: 50,
        borderColor: '#dedede',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        left: -1,
        right: -1,
      }}
    ></PlacesInput>
  );
};

export default PlacesAutocompleteInput;
