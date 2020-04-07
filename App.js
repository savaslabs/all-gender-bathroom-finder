import React, { useState, setState } from 'react';
import { Home } from './src/views/Home';
import { Results } from './src/views/Results';
import SwitchNavigator from './src/navigation/SwitchNavigator';
// import * as firebase from 'firebase';
//import firebaseConfig from './firebase';

export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      <SwitchNavigator />
    </AuthContext.Provider>
  );
}

export default App;
