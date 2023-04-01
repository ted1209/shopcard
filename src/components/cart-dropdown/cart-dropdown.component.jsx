import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../buttons/button.component";

import { CartContext } from "../../contexts/cart.context.component";

import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigator = useNavigate()

  const goToCheckOutHandler = ()=>{
    navigator("/check-out")
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};
export default CartDropdown;
