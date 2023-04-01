import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context.component";

import "./product-card.styles.scss";
import Button from "../buttons/button.component";

const ProductCard = ({ product }) => {
  const { id, name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)
  
  return (
    <div className="product-card-container" key={id}>
      <img src={imageUrl} alt="" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>Add to Card</Button>
    </div>
  );
};

export default ProductCard;
