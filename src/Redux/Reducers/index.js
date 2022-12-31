import {combineReducers} from 'redux'
import { productReducer,selectedProductReducer } from './productReducer'

export const Reducers=combineReducers({
    allproducts: productReducer,
    product: selectedProductReducer,
});