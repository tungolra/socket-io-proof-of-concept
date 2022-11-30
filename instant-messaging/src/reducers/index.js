//specified for all users in our application

import {combineReducers} from "redux"

import authReducer from './authReducer'

//export a common file for all reducers
export const reducers = combineReducers({authReducer})