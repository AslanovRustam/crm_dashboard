import type { FC } from "react";
import s from "./title.module.css";

interface TitleSectionProps {
  text: string;
}

const TitleSection: FC<TitleSectionProps> = ({ text }) => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.titleSection}>{text}</h2>
    </div>
  );
};

export default TitleSection;
