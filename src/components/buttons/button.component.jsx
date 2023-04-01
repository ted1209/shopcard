import "./button.styles.scss"

const BUTTON_TYPE_CLASS = {
  google: "google-sign-in",
  inverted: "inverted",
};
const ButtonDesign = ({ children, buttonType, ...ortherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASS[buttonType]}`}
      {...ortherProps}
    >
      {children}
    </button>
  );
};

export default ButtonDesign;
