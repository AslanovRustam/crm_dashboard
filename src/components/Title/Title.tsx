import type { FC } from "react";
import s from "./title.module.css";

interface TitleProps {
  text?: string;
}

const Title: FC<TitleProps> = ({ text }) => {
  return (
    <div className={s.container}>
      {text && <h1 className={s.title}>{text}</h1>}
    </div>
  );
};

export default Title;
