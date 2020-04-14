import React from 'react';
import SwitchNavigator from './src/navigation/SwitchNavigator';
import { AuthProvider } from './src/context/AuthContext';
import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

function App() {
  return (
    <AuthProvider>
      <SwitchNavigator />
    </AuthProvider>
  );
}

export default App;
