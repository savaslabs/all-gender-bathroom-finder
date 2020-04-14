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

import React from 'react';
import PlacesInput from 'react-native-places-input';
import { GOOGLE_API_KEY } from 'react-native-dotenv';

const MapInput = (props) => {
  return (
    <PlacesInput
      googleApiKey={GOOGLE_API_KEY}
      onSelect={(place) => props.handleSelection(place)}
      queryFields={'place_id,name,formatted_address,formatted_phone_number,types,website'}
    />
  );
};

export default MapInput;
