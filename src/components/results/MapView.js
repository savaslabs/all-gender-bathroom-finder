/**
 * @file WORK IN-PROGRESS
 *
 * Native map display.
 *
 * Renders map using Expo's MapView.
 *
 * MapView documentation:
 * https://docs.expo.io/versions/latest/sdk/map-view/
 *
 */

import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

const ResultsMapView = (props) => {
  return (
    <MapView
      style={styles.mapStyle}
      region={props.region}
      showsUserLocation={true}
      onRegionChange={(reg) => props.onRegionChange(reg)}
    >
      <Marker coordinate={props.region} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default ResultsMapView;
