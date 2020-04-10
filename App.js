import React, { useEffect, useState } from 'react';
import { Home } from './src/views/Home';
import { Results } from './src/views/Results';
import SwitchNavigator from './src/navigation/SwitchNavigator';
import { AuthProvider } from './src/context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <SwitchNavigator />
    </AuthProvider>
  );
}

export default App;
