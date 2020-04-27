/**
 * @file
 *
 * Navigation.
 *
 * Sets up switch navigation throughout site.
 *
 * SwitchNavigator documentation:
 * https://reactnavigation.org/docs/1.x/switch-navigator/
 *
 */


import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Home from '../views/Home';
import Register from '../views/Register'
import Login from '../views/Login';
import Profile from '../views/Profile';
import Results from '../views/Results';
import ForgotPassword from '../views/ForgotPassword';
import AddNew from '../views/AddNew';
import AddSuccess from '../views/AddSuccess';

const SwitchNavigator = createSwitchNavigator(
    {
        Home: {
          screen: Home
        },
        Login: {
            screen: Login
        },
        Register: {
            screen: Register
        },
        Profile: {
            screen: Profile
        },
        ForgotPassword: {
          screen: ForgotPassword
        },
        Results: {
          screen: Results
        },
        AddNew: {
          screen: AddNew
        },
        AddSuccess: {
          screen: AddSuccess
        }
    },
    {
        initialRouteName: 'Home'
    }
)

export default createAppContainer(SwitchNavigator)