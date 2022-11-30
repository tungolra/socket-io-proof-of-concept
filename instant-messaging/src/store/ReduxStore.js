// code from docs
// used to persist data in local storage

import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
//import thunk for async performance
import thunk from "redux-thunk";
import { reducers } from "../reducers";

//function to save state in local storage; sterilizes data
function saveToLocalStorage(store) {
  try {
    const serializedStore = JSON.stringify(store);
    window.localStorage.setItem("store", serializedStore);
  } catch (e) {
    console.log(e);
  }
}
// retrieve data from local storage
function loadFromLocalStorage() {
  try {
    const serializedStore = window.localStorage.getItem("store");
    if (serializedStore === null) return undefined;
    return JSON.parse(serializedStore);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

//method to make store available for redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();

// function to create store that passes in our redueers and include thunk middleware
const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

//store subscribing to localstorage that reflects any changes in local storage
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
