import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase.util";

import { ReactComponent as CrwLogo } from "../../assets/images/crown.svg";

import { UserContext } from "../../contexts/user.context.component";

import { CartContext } from "../../contexts/cart.context.component";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import "./navigation.styles.scss";

export default function Navigation() {
  const { currentUser } = useContext(UserContext);

  const { cartOpen } = useContext(CartContext);

  // console.log("testing current user log in", currentUser);

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/">
          <div className="logo-container">
            <CrwLogo />
          </div>
        </Link>
        <div className="nav-links-container">
          <div>
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
          </div>
          <div>
            {currentUser ? (
              <span className="nav-link" onClick={signOutUser}>
                SIGN OUT
              </span>
            ) : (
              <Link className="nav-link" to="/sign-in">
                SIGN IN
              </Link>
            )}
          </div>
          <CartIcon />
        </div>
        {cartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
}
