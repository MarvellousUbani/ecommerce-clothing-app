import React from 'react';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component'
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCart} from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ? cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            )) : <span className="empty-message">No Items have been added yet!</span> }
        </div>
        <CustomButton onClick={() => {
            history.push("/checkout");
            dispatch(toggleCart());
            }}>
        GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));