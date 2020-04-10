import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Home from '../views/Home';
import Register from '../views/Register'
import Login from '../views/Login';
import Profile from '../views/Profile';
import ForgotPassword from '../views/ForgotPassword';

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
        }
    },
    {
        initialRouteName: 'Home'
    }
)

export default createAppContainer(SwitchNavigator)