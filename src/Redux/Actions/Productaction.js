import fakeStoreApi from "../../Api/fakeStoreApi";
import { Actiontypes } from "../Contants/Actiontypes";

export const getProducts=()=> async  (dispatch)=>{
    const response =await fakeStoreApi.get("/products");
    dispatch({type:Actiontypes.GET_PRODUCTS, payload:response.data});
    };


    export const getProduct=(id)=> async  (dispatch)=>{
        const response =await fakeStoreApi.get(`/products/${id}`);
        dispatch({type:Actiontypes.SELECTED_PRODUCT, payload:response.data});
        };


export const setProducts=(products)=>{
    return{
        type:Actiontypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct=(product)=>{
return{
    type:Actiontypes.SELECTED_PRODUCT,
    payload:product
};
}; export const removeProduct=(product)=>{
    return{
        type:Actiontypes.REMOVE_PRODUCT,
    };
    };
