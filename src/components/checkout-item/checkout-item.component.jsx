import React from 'react';
import {connect} from 'react-redux';

import './checkout-item.styles.scss';
import {removeCartItem, addItem, removeItem} from '../../redux/cart/cart.actions';

const CheckoutItem = ({removeCartItem, cartItem, addItem, removeItem}) => {
    const {name, imageUrl, quantity, price} = cartItem
    return(
        <div className="checkout-item">
        <div className="image-container">
            <img alt="item" src={imageUrl} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
                </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={() => removeCartItem(cartItem)}>&#10005;</span>
        </div>
    )
}   

const mapDispatchToProps = dispatch => ({
    removeCartItem: item => dispatch(removeCartItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);