import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context.component";

import "./checkout-item.styles.scss";

const CheckOutItem =({cartItem})=>{

    const {id, name,imageUrl, price, quantity } = cartItem;

    const {clearItemFromCart, addItemToCart, removeItemToCart} = useContext(CartContext);

    const clearItemHandler = () => {
        return clearItemFromCart(cartItem)
    };

    const removeItemHandler = ()=>{
        removeItemToCart(cartItem)
    }

    const addItemHandler = ()=>{
        addItemToCart(cartItem)
    }
    
    return(
        <div className="checkout-item-container" key={id}>
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={ removeItemHandler}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
        </div>
    )

}
export default CheckOutItem;
