import { Actiontypes } from "../Contants/Actiontypes";

const initialstate={
    products:[],
};
export const productReducer=(state=initialstate,{type,payload})=>{
    switch (type) {
        case Actiontypes.SET_PRODUCTS:
            return {...state, products:payload};
        case Actiontypes.GET_PRODUCTS:
            return {...state, products:payload};
        default:
            return state;
    }

};

export const selectedProductReducer=(state={},{type,payload})=>{
 switch (type) {
    case Actiontypes.SELECTED_PRODUCT:
        return {...state, ...payload};
        case Actiontypes.REMOVE_PRODUCT:
            return {};
    default:
        return state;
 }
};