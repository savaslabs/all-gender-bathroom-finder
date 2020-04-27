/**
 * @file WORK IN-PROGRESS
 *
 * Logic for interacting with Firestore.
 *
 * Firestore read/write data documentation:
 * https://firebase.google.com/docs/firestore/query-data/get-data
 *
 */
import { db } from '../../firebase';

export const getBathroomTypes = () => {
  let typesArr = [];
  return new Promise((resolve, reject) => {
    db.collection('types')
      .get()
      .then((types) => {
        types.forEach((type, index) => {
          typesArr = [
            ...typesArr,
            {
              label: type.data().label,
              value: type.id,
              key: index,
            },
          ];
        });
        resolve(typesArr);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const setLocationInFirestore = (placeId, newPlace) => {
  return new Promise((resolve, reject) => {
    const bathroomDoc = db.collection('bathrooms').doc(placeId);
    bathroomDoc
      .set(newPlace)
      .then(resolve('Location successfully added.'))
      .catch((err) => reject(err));
  });
};

export const updateBathroom = (placeId, newData) => {
  return new Promise((resolve, reject) => {
    const bathroomDoc = db.collection('bathrooms').doc(placeId);
    bathroomDoc
      .update(newData)
      .then(resolve('Location successfully updated.'))
      .catch((err) => reject(err));
  });
};

export const deleteBathroom = (placeId) => {
  return new Promise((resolve, reject) => {
    const bathroomDoc = db.collection('bathrooms').doc(placeId);
    bathroomDoc
      .delete()
      .then(resolve('Location successfully deleted.'))
      .catch((err) => reject(err));
  });
};