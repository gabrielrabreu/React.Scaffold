import { type ButtonHTMLAttributes, type FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<Props> = ({ ...rest }) => {
  return <button {...rest} />;
};

export default Button;
