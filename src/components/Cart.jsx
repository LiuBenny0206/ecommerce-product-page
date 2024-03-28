import React, { useState } from 'react';
import FirstSmallShoesPic from "../images/image-product-1-thumbnail.jpg";
import { ReactComponent as TrashIcon } from "../images/icon-delete.svg"


function Cart(props) {
    const [deleteAmount, setDeleteAmount] = useState("");

    function handleDeleteAmount() {
        const newAmount = "";
        props.setShoesAmount(newAmount);
    }


    return (
      <div className="cart-part">
        <div className="title">
          <p>Cart</p>
        </div>
        {props.shoesAmount > 0 ? (
          <div className="info">
            <div className="cart-pic-part">
              <img src={FirstSmallShoesPic} alt="small-pic-shoes" />
            </div>
            <div className="detail-part">
              <div className="info-title">
                <p>Fall Limited Edition Sneakers</p>
              </div>
              <div className="info-price">
                <p>$125.00 x {props.shoesAmount} =</p>
                <p>${(125 * props.shoesAmount).toFixed(2)}</p>
              </div>
            </div>
            <div className="delete-part">
              <TrashIcon onClick={handleDeleteAmount}/>
            </div>
          </div>
        ) : (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
          </div>
        )}
        { props.shoesAmount && <button className="checkout-btn" type="button">Checkout</button>}
      </div>
    );
  }
  
  export default Cart;
  