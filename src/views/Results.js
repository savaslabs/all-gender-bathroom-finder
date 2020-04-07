import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export function Results({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Results Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
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