import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as ShoppingIcon}  from '../../assets/shopping-bag.svg';
import {createStructuredSelector} from 'reselect';

import './cart-icon.styles.scss';

import {toggleCart} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';


const CartIcon = ({toggleCart, itemCount}) => (
    <div className= 'cart-icon'  onClick={toggleCart}>
        <ShoppingIcon className= 'shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch =>({
    toggleCart: () => dispatch(toggleCart())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);