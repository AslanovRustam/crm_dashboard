import type { FC } from "react";
import s from "./rowhead.module.css";

interface RowHeadProps {
  [key: string]: string;
}

const RowHead: FC<RowHeadProps> = ({ first, second, third }) => {
  return (
    <div className={s.head}>
      <p className={s.first}>{first}</p>
      <p className={s.second}>{second}</p>
      <p className={s.third}>{third}</p>
    </div>
  );
};

export default RowHead;
