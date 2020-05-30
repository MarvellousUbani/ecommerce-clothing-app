import {CartActionTypes} from './cart.types';

export const toggleCart = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})


export const addItem = item => ({
    type:CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type:CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const removeCartItem  = item  => ({
    type:CartActionTypes.REMOVE_CART_ITEM,
    payload:item
})

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
})

