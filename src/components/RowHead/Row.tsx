import type { FC, ReactElement } from "react";
import s from "./rowhead.module.css";

interface RowProps {
  logo: ReactElement;
  name: string;
  sold: number;
  income: string;
}

const Row: FC<RowProps> = ({ logo, name, sold, income }) => {
  return (
    <div className={s.head}>
      <div className={`${s.first} ${s.row}`}>
        {logo}
        {name}
      </div>
      <div className={`${s.second} ${s.row}`}>{sold}</div>
      <div className={`${s.third} ${s.row}`}>{income}</div>
    </div>
  );
};

export default Row;
