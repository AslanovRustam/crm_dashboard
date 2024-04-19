import type { FC } from "react";
import s from "./textglitch.module.css";

interface TextGlichProps {
  text: string;
}

const TextGlich: FC<TextGlichProps> = ({ text }) => {
  return (
    <h1 className={s.title} data-text={text}>
      {text}
    </h1>
  );
};

export default TextGlich;
