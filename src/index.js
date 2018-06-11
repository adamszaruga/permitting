import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import rootReducer from './reducers.js'
import Dashboard from './Dashboard.js'
import firebase from 'firebase'

const firebaseConfig = {
	apiKey: "AIzaSyBei2n85K1RtYkzNusHoJ1uRPhTgY99muo",
	authDomain: "simple-permits.firebaseapp.com",
	databaseURL: "https://simple-permits.firebaseio.com",
	projectId: "simple-permits",
	storageBucket: "",
	messagingSenderId: "990549425252"
};

// react-redux-firebase config
const rrfConfig = {
	userProfile: 'users',
}

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Initialize other services on firebase instance

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig)
)(createStore)

// Create store with reducers and initial state
const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState)

// Setup react-redux so that connect HOC can be used
const App = () => (
  <Provider store={store}>
    <Dashboard />
  </Provider>
);

render(<App/>, document.getElementById('permitting-root'));