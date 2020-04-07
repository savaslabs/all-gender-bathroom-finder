import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Register from '../views/Register'
import Login from '../views/Login';
import Profile from '../views/Profile';

const SwitchNavigator = createSwitchNavigator(
    {
        Login: {
            screen: Login
        },
        Register: {
            screen: Register
        },
        Profile: {
            screen: Profile
        }
    },
    {
        initialRouteName: 'Login'
    }
)

export default createAppContainer(SwitchNavigator)