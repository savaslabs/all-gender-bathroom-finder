/**
 * @file
 *
 * Picker component for bathroom types list.
 *
 * Uses RNPickerSelect to render both a TextInput and
 * render the picker at the bottom of the screen.
 *
 *
 * RNPickerSelect documentation:
 * https://github.com/lawnstarter/react-native-picker-select
 *
 */

import React, { useContext, useEffect, useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { PlaceContext } from '../../context/PlaceContext';

const BathroomTypePicker = () => {
  const Place = useContext(PlaceContext);

  return (
    <RNPickerSelect
      placeholder={{label: "Select a bathroom type...", value: null, key: 0}}
      onValueChange={(itemValue) =>
        Place.setNewPlace({
          ...Place.newPlace,
          bathroom_type: itemValue,
        })
      }
      items={[...Place.bathroomTypes, { label: 'Not sure', value: 'N/A', key: 'N/A'}]}
      value={Place.newPlace.bathroom_type}
    />
  );
};

export default BathroomTypePicker;
