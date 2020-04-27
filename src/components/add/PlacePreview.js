/**
 * @file WORK IN-PROGRESS
 *
 * Place preview when adding new location.
 *
 * Allows user to preview the place they are
 * adding to the database.
 *
 */

import React, { useContext } from 'react';
import { Text, Button, View } from 'react-native';
import { PlaceContext } from '../../context/PlaceContext';

export default function PlacePreview() {
  const Place = useContext(PlaceContext);

  return (
    <View>
      <Text style={{ marginTop: 150 }}>
        Here is the location you're adding:{'\n'}
        {Place.preview}
      </Text>
    </View>
  );
}
