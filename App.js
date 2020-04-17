/**
 * @file
 *
 * Main app entry.
 *
 * Context providers wrap Navigators which will allow users
 * to move throughout the app.
 *
 * The base-64 package solve an undefined variabale issue
 * caused by firestore.
 * Reference:
 * https://stackoverflow.com/questions/60361519/cant-find-a-variable-atob/60369040#60369040
 *
 */

import React from 'react';
import SwitchNavigator from './src/navigation/SwitchNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { PlaceProvider } from './src/context/PlaceContext';
import { decode, encode } from 'base-64';

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

function App() {
  return (
    <AuthProvider>
      <PlaceProvider>
        <SwitchNavigator />
      </PlaceProvider>
    </AuthProvider>
  );
}

export default App;
