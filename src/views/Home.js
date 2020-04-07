import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to our bathroom finder.</Text>
      <Button
        title="Go to Results"
        onPress={() => navigation.navigate('Results')}
      />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
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

export default Home;
