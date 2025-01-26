import classNames from "classnames";

const buttonVariants = {
  primary:
    "w-[200px] h-[50px] border rounded-lg text-white bg-dark-blue hover:bg-white hover:text-dark-blue",
  secondary:
    "w-[200px] h-[50px] border rounded-lg hover:bg-dark-blue hover:text-white",
};

const Button = ({ children, variant = "primary"}) => {
  return (
    <button className={classNames(buttonVariants[variant])}>
      {children || "Button"}
    </button>
  );
};

export default Button;
