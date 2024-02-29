import type { FC } from "react";
import s from "./button.module.css";

interface ButtonProps {
  name: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ name, onClick }) => {
  return (
    <button type="button" className={s.btn} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
