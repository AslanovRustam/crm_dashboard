import type { FC } from "react";
import s from "./promo.module.css";
import { IPromo } from "@/types/interface";

interface PromoItemProps {
  item: IPromo;
}

const PromoItem: FC<PromoItemProps> = ({ item: { name, percent, text } }) => {
  return (
    <li className={s.item}>
      <div className={s.discountConrainer}>
        <p className={s.percent}>-{percent}%</p>
      </div>
      <div className={s.info}>
        <p className={s.name}>{name}</p>
        <p className={s.text}>{text}</p>
      </div>
    </li>
  );
};

export default PromoItem;
