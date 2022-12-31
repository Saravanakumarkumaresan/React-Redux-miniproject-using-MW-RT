import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { ProductComponents } from './PoductComponents';
import {  getProducts } from '../Redux/Actions/Productaction';

export const ProductListing=()=>{
    const products=useSelector((state)=>state);
    const dispatch=useDispatch();
   

useEffect(()=>{
    dispatch(getProducts());
},[]);
console.log("products:",products);

    return(
        <div className='ui grid container'>
            <ProductComponents />
        </div>
    )
}