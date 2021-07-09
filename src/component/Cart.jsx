import React, { createContext, useEffect, useReducer } from 'react';
import './cart.css';
import ContextCart from './ConextC';
import {products} from './Products';
import {reducer} from './reducer';


export const CartContext = createContext();

const initialState={
    item:products,
    totalAmount:0,
    totalItem:0,
}

const Cart = () => {

   const[state,dispatch] = useReducer(reducer,initialState);

   const removeItem = (id) =>{
       return dispatch({
           type:"REMOVE_ITEM",
           payload:id,
       })

   }
   const clearCart=() =>{
       return dispatch({
           type:"CLEAR_ALL",
       })
   }

   const increment=(id) =>{
       return dispatch({
           type:"INCREMENT",
           payload:id,
       })
   }
//Decrement
   const decrement = (id) =>{
       return dispatch({
           type:"DECREMET",
           payload:id,
           
       })
   }

   useEffect(()=>{
       dispatch({type:"TOTAL_ITEM"});
       dispatch({type:"TOTAL_AMT"})
    //    console.log("AWesome");
   },[state.item])

    return (<>
    <CartContext.Provider value={{...state,removeItem,clearCart,increment,decrement}}>

       <ContextCart/>
    </CartContext.Provider>
    </>)
}
export default Cart