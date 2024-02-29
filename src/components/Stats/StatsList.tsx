import type { FC } from "react";
import StatsItem from "./StatsItem";
import { stats } from "@/data/data";
import s from "./stats.module.css";

interface StatsListProps {}

const StatsList: FC<StatsListProps> = () => {
  return (
    <ul className={s.list}>
      {stats.map((item, index) => (
        <StatsItem item={item} key={item.id} index={index} />
      ))}
    </ul>
  );
};

export default StatsList;
