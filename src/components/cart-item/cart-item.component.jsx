import "./cart-item.style.scss";

const CartItem = ({ cartItem }) => {
  const { id, name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="cart-item-container" key={id}>
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span>{name}</span>
        <span className="price">
          {quantity} * {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
