import "./form-input.style.scss";

const FormInput = ({ label, ...ortherProps }) => {
  return (
    <div className="group">
        <input className="form-input" {...ortherProps} />
      {label && (
        <label
          className={`${
            ortherProps.value.lenth ? "shrink" : ""
          } form-input-label`}
          htmlFor=""
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
