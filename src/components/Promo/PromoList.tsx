import type { FC } from "react";
import s from "./promo.module.css";
import { IPromo } from "@/types/interface";
// import PromoItem from "./PromoItem";
import dynamic from "next/dynamic";
const PromoItem = dynamic(() => import("./PromoItem"), {
  loading: () => <p>Loading promo</p>,
  ssr: false,
});

interface PromoListProps {
  promo: IPromo[];
}

const PromoList: FC<PromoListProps> = ({ promo }) => {
  return (
    <ul className={s.list}>
      {promo.map((item) => (
        <PromoItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default PromoList;
