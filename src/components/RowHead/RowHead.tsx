import type { FC } from "react";
import s from "./rowhead.module.css";

interface RowHeadProps {
  [key: string]: string | boolean;
}

const RowHead: FC<RowHeadProps> = ({ first, second, third, width }) => {
  return (
    <div className={s.head}>
      <p className={s.first}>{first}</p>
      <p className={`${s.second} ${width && s.customWidth}`}>{second}</p>
      <p className={s.third}>{third}</p>
    </div>
  );
};

export default RowHead;
