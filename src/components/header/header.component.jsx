import React from 'react';
import './header.styles.scss'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import {auth} from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../assets/crown.svg'

const Header = ({ currentUser, hidden}) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
    
    <div className="options">
        <Link to="/shop" className="option">
            SHOP
        </Link>
        {
            currentUser ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> : 
            <Link to="/signin" className="option"> SIGN IN </Link>
        }
        <CartIcon />
    </div>
       { hidden === true ? null : <CartDropdown /> }
    </div>
)


const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);