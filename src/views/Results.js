/**
 * @file WORK IN PROGRESS/INCOMPLETE
 *
 * Results screen.
 *
 * Ideally will search for locations using Places
 * API and cross-reference with our bathrooms
 * collection. Users should then be able to choose
 * between a map view or list view.
 *
 */

import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
// import MapInput from '../components/results/MapInput';
import {
  getLocation,
} from '../services/location-service';

export function Results({ navigation }) {
  const [region, setRegion] = useState('');

  const getInitialLocation = () => {
    getLocation().then((data) => {
      setRegion({
        latitude: data.latitude,
        longitude: data.longitude,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      });
    });
  };

  const getCoordsFromName = (loc) => {
    console.log(loc);
    setRegion({
      latitude: loc.lat,
      longitude: loc.lng,
      latitudeDelta: 0.003,
      longitudeDelta: 0.003,
    });
  };

  const onMapRegionChange = (region) => {
    setRegion(region);
  };

  useEffect(() => {
    getInitialLocation();
  });

  return (
    <View style={{ flex: 1, marginTop: 50}} keyboardShouldPersistTaps={"always"}>

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

export default Results;
