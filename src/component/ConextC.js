import React, { useContext, useState } from 'react';
import Item from './Item';
import { Scrollbars } from 'react-custom-scrollbars-2';
import {CartContext} from './Cart';

const ContextCart = () =>{
    // const [item,setItem] =useState(products);
 

     const {totalItem,totalAmount ,item,clearCart} = useContext(CartContext);
    return(<>
         <header>
            <div className="continue-shopping">
                <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
                <h3>continue shpping</h3>
            </div>
            <div className="cart-icon">
                <img src="./images/cart.png" alt="cart" />
                <p>{totalItem}</p>

            </div>
        </header>
        <section className="main-cart-section">

            <h1>Shpping Cart</h1>
            <p className="total-items">you have<span className="total-item-count">{totalItem } </span> item in your cart</p>
            <div className="cart-items">
                <div className="cart-items-container">
              <Scrollbars>
       
                {
                   item.map((cur)=>{
                       return  <Item key={cur.id} {...cur} />
                   })
                }
                
                 </Scrollbars>
                </div>
            </div>
            <div className="card-total">
            <h3>Cart total:<span>{totalAmount}</span></h3>
            <button>check out</button>
            <button className="clear-cart" onClick={clearCart}>Clear cart</button>

            </div>
        </section>
    </>);

};
export default ContextCart