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
