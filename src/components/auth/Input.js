/**
 * @file
 *
 * Predefined TextInput elements.
 *
 * Create TextInput for specific use cases such as email
 * and password. This allows us to de-clutter other components
 * and handle props on elements that might be used in multiple
 * components. For example, Email is used both in Login and
 * Register forms.
 *
 *
 * React Native documentation:
 * https://reactnative.dev/docs/textinput
 *
 */

import React from 'react';
import { TextInput } from 'react-native';

export const Email = (props) => (
  <TextInput
    accessibilityLabel="email"
    autoCapitalize="none"
    textContentType={'emailAddress'} // Defining this will allow apps like 1Password to recognize and auto fill the field.
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
    textContentType={'newPassword'} // Defining as newPassword can help apps prompt to save login information.
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
