import type { FC } from "react";
import s from "./button.module.css";

interface ButtonProps {
  name: string;
  onClick: () => void;
  width?: string;
  type?: "submit" | "button" | "reset";
  delete?: boolean;
}

const Button: FC<ButtonProps> = ({
  name,
  onClick,
  width,
  type,
  delete: deleteProp = false,
}) => {
  return (
    <button
      type={type ? type : "button"}
      className={`${s.btn} ${deleteProp && s.delete}`}
      style={{ width: `${width}` }}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
