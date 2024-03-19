import type { ChangeEvent, FC } from "react";
import s from "./input.module.css";

interface InputProps {
  type: string;
  title: string;
  placeholder: string;
  error?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type,
  title,
  onChange,
  placeholder,
  error,
  value,
}) => {
  return (
    <label className={s.label}>
      <p className={s.name}>{title}</p>
      <input
        className={`${s.input} ${error && s.errorBorder}`}
        type={type}
        name={title}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <p className={s.errorMessage}>please, fill the name</p>}
    </label>
  );
};

export default Input;
