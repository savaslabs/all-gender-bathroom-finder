import React from 'react'
import {
  TextInput,
} from 'react-native';

export const Email = (props) => (
  <TextInput
    accessibilityLabel="email"
    autoCapitalize="none"
    textContentType={'email'}
    onChangeText={props.onChangeText}
    placeholder={'Email'}
    style={props.style}
    value={props.value}
  />
);


export const Password = (props) => (
  <TextInput
    accessibilityLabel="password"
    autoCapitalize="none"
    textContentType={'password'}
    autoCorrect={false}
    onChangeText={props.onChangeText}
    onSubmitEditing={props.onSubmitEditing}
    placeholder={'Password'}
    style={props.style}
    secureTextEntry={true}
    value={props.value}
  />
);
