import { combineReducers } from "@reduxjs/toolkit";
import { profileReducer, cartReducer } from '../Reducer/profileReducer'


const reducers = combineReducers({
   
   allusers: profileReducer,
   addtocart: cartReducer,

});
export default reducers;