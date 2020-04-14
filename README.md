# All-Gender Bathroom Finder

_**NOTE**_: This repo is still "In Progress". All work has primarily been focused on interacting with Firebase and the Google APIs. Any styling applied is basic styling copied over from examples of some components. Some functionality remains incomplete or still requires refactoring.

## Requirements
1. Node.js should be installed on your local machine. If you run into problems with your node version, try updating it by running the following:
```bash
# Install node version manager.
brew install nvm

# Installs the most recent node version.
nvm install node

# Activate the node version you installed.
nvm use node
```
1. Yarn `npm install -g yarn`
1. Expo CLI `npm install -g expo-cli`


## Site installation
1. Clone this project `git clone git@github.com:savaslabs/all-gender-bathroom-finder.git`
1. Run `yarn install`
1. Create a `.env` file in the root directory and contact Alex for the contents.
1. Contact Alex to add you to the Google Cloud project so you can access APIs, Firebase, etc.

## Project Notes

### Project Structure
1. The entire app stems based off of `App.js` in the root directory.
1. `firebase.js` contains most configuration for firebase setup.
1. Most files you will interact with live within the `/src` directory.
- `/views` contains files for basically any screen a user will land on. Ideally, this top-level components should be pretty simple and free of too much logic.
-  `/components` - The building blocks that will help assemble components in `views` (as well as other components). Components are separated generally by the actions they are performing.
- `/context` - All files setting up Context Providers should live here. Context allows us to share state throughout the app.
- `/navigation` - Any files to define navigation for the app. The app utilizes [React Navigation](https://reactnavigation.org/). Currently this is built with Switch navigation, but the type of navigation might change.
- `/services` - Files that primarily contain functions and other actions.

### Technology
1. This project uses Expo and React Native with the intention of creating a _native only_ application.
1. Firebase handles authentication using the username/password method.
1. The database is handled by Firestore.
1. This application makes heavy use of Google's Places and Maps APIs.

### Database reference
Firestore currently contains two collections `bathrooms` and `types`.

#### Bathrooms
Ids of bathrooms in the database are intentionally set to match a Google Place ID for easy reference. Basic structure looks like this:
```js
googlePlaceId: {
  accessible: Boolean (user provided)
  bathroom_type: reference to types collection (user provided)
  changing_table: Boolean (user provided)
  formatted_address: String (provided by Google Places API),
  formatted_phone_number: String (provided by Google Places API)
  name: String (provided by Google Places API)
  types: Array (provided by Google Places API)
  website: String (provided by Google Places API)
}
```

#### Bathroom Types
IDs of documents basically serve as the machine-readable value. Label serves as the human readable text. Example:
```js
  single_stall_neutral: { label: 'Single Stall (Non-gendered)'}
```
