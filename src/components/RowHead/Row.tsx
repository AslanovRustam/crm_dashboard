import type { FC, ReactElement } from "react";
import s from "./rowhead.module.css";
import { ICompanySales } from "@/types/interface";

interface RowProps {
  item: ICompanySales;
  width: boolean;
}

const Row: FC<RowProps> = ({ item, width }) => {
  return (
    <div className={s.head}>
      <div className={`${s.first} ${s.row}`}>
        {item.logo}
        {item.name}
      </div>
      <div className={`${s.second} ${s.row} ${width && s.customWidth}`}>
        {item.sold ?? item.promoName}
      </div>
      <div className={`${s.third} ${s.row}`}>{item.income ?? item.percent}</div>
    </div>
  );
};

export default Row;
