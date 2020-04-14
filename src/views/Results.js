import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MapInput from '../components/results/MapInput';
import ResultsMapView from '../components/results/MapView';
import { GOOGLE_API_KEY } from 'react-native-dotenv';
import {
  getLocation,
  geocodeLocationByName,
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
      <MapInput />
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
