import { useContext, useEffect, useState } from "react";

import { ReactComponent as ShopIcon } from "../../assets/images/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context.component";

import "./cart-icon.styles.scss";

export default function CartIcon() {
  const { cartOpen, setCartOpen } = useContext(CartContext);
  const {cartItems, cartCount} = useContext(CartContext);

  const toggleCartOpen = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleCartOpen}>
      <div className="shopping-icon">
        <ShopIcon />
      </div>
      <span className="item-count">{cartCount}</span>
    </div>
  );
}
