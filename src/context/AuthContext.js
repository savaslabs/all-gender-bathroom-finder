/**
 * @file
 *
 * AuthContext setup.
 *
 * Sets up React Context to share state between all
 * auth-related components.
 *
 * Context documentation:
 * https://reactjs.org/docs/context.html
 *
 * Hooks documentation:
 * https://reactjs.org/docs/hooks-reference.html
 *
 */

import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setLoggedIn, message, setMessage, error, setError }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
