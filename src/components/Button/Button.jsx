import "./Button.css";

const Button = ({ variant, children, onClick, ...restProps }) => {
  let className = "button";

  if (variant === "fullWidth") {
    className += " full-width";
  }

  return (
    <button className={className} onClick={onClick} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
