export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cardItems.find(
        cartItem => cartItem.id == cartItemToAdd.id
    );

    if(exisitingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id == cartItemToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
            )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}