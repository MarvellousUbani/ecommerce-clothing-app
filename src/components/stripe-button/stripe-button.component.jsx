import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_mFzGVu9g3C96F5QfpVdw1dt400ainmZYNN';

    const onToken = token => {
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="Marv Clothing"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton;