import React from 'react'
import {
  TextInput,
} from 'react-native';

export const Email = (props) => (
  <TextInput
    accessibilityLabel="email"
    autoCapitalize="none"
    textContentType={'emailAddress'}
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

export const NewPassword = (props) => (
  <TextInput
    accessibilityLabel="Choose your password"
    autoCapitalize="none"
    textContentType={'newPassword'}
    autoCorrect={false}
    onChangeText={props.onChangeText}
    onSubmitEditing={props.onSubmitEditing}
    placeholder={'Password'}
    style={props.style}
    secureTextEntry={true}
    value={props.value}
  />
);

export const VerifyPassword = (props) => (
  <TextInput
    accessibilityLabel="Re-type Password"
    autoCapitalize="none"
    autoCorrect={false}
    onChangeText={props.onChangeText}
    onSubmitEditing={props.onSubmitEditing}
    placeholder={'Verify Password'}
    style={props.style}
    secureTextEntry={true}
    value={props.value}
  />
);
