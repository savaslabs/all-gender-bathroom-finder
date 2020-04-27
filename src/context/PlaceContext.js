/**
 * @file
 *
 * PlaceContext setup.
 *
 * Sets up React Context to share state when
 * adding new bathrooms.
 *
 * Context documentation:
 * https://reactjs.org/docs/context.html
 *
 * Hooks documentation:
 * https://reactjs.org/docs/hooks-reference.html
 *
 */

import React, { createContext, useState } from 'react';

export const PlaceContext = createContext();

export const PlaceProvider = (props) => {
  const [newPlace, setNewPlace] = useState({
    bathroom_type: null,
    accessible: false,
    changing_table: false,
  });
  const [bathroomTypes, setBathroomTypes] = useState([]);
  const [placeId, setPlaceId] = useState('');
  const [inputVal, setInputVal] = useState('');
  const [preview, setPreview] = useState('');

  const createLocationFromGooglePlace = (place) => {
    const {
      place_id,
      name,
      formatted_address,
      formatted_phone_number,
      website,
      types,
    } = place.result;

    setPlaceId(place_id);
    setNewPlace({
      ...newPlace,
      name,
      formatted_address,
      formatted_phone_number,
      website,
      types,
    });
  };

  const resetPlace = () => {
    setNewPlace({
      bathroom_type: null,
      accessible: false,
      changing_table: false,
    });
    setPlaceId('');
    setInputVal('');
    setPreview('');
  }

  return (
    <PlaceContext.Provider
      value={{
        newPlace,
        setNewPlace,
        bathroomTypes,
        setBathroomTypes,
        placeId,
        setPlaceId,
        createLocationFromGooglePlace,
        inputVal,
        setInputVal,
        preview,
        setPreview,
        resetPlace
      }}
    >
      {props.children}
    </PlaceContext.Provider>
  );
};
