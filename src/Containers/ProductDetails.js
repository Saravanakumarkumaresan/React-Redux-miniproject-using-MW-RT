import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { useDispatch } from "react-redux";
import { getProduct, removeProduct } from "../Redux/Actions/Productaction";
import { useSelector } from "react-redux";

export const ProductDetails=()=>{
    const products=useSelector((state)=>state.product);
    const {image,price,title,category,description}=products;
const {productsId}=useParams();
const dispatch=useDispatch();
console.log(productsId);


useEffect(()=>{
    if(productsId && productsId !== "")dispatch(getProduct(productsId));
    return()=>{
        dispatch(removeProduct());
    };
},[productsId]);

    return(
        
            <div className="ui grid container">
    {Object.keys(products).length===0?(
        <div>loading</div>
    ): (
        <div className="ui placeholder segment">
         <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
             <div className="middle aligned row">
                <div className="column lp">
                    <img className="ui fluid image" src={image}/>
                </div>
                <div className="column rp">
                    <h1>{title}</h1>
                    <h2>
                        <a className="ui teal tag label">${price}</a>
                    </h2>
                    <h3 className="ui brown block header">{category}</h3>
                    <p>{description}</p>
                    <div className="ui vertical animated button" tabIndex="0">
                        <div className="hidden content">
                            <i className="shop icon"></i>
                        </div>
                    <div className="visible content"> Add to cart </div>

                    </div>
                    </div>
                    </div>   
             </div>
         </div>
    )}
        </div>
    )
}