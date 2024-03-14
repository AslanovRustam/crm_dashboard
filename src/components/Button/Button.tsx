import type { FC } from "react";
import s from "./button.module.css";

interface ButtonProps {
  name: string;
  onClick: () => void;
  width?: string;
}

const Button: FC<ButtonProps> = ({ name, onClick, width }) => {
  return (
    <button
      type="button"
      className={s.btn}
      style={{ width: `${width}` }}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
