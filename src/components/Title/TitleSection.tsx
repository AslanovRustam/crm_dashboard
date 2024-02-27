import type { FC } from "react";
import s from "./title.module.css";

interface TitleSectionProps {
  text: string;
}

const TitleSection: FC<TitleSectionProps> = ({ text }) => {
  return <h2 className={s.titleSection}>{text}</h2>;
};

export default TitleSection;
