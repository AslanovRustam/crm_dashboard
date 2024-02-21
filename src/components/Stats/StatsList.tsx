import type { FC } from "react";
import StatsItem from "./StatsItem";
import s from "./stats.module.css";

interface StatsListProps {}

const StatsList: FC<StatsListProps> = () => {
  const stats = [
    { id: 0, text: "Total promotions", count: 432 },
    { id: 1, text: "Total category", count: 8 },
    { id: 2, text: "New companies", count: 28 },
    { id: 3, text: "Total active companies", count: 45 },
  ];
  return (
    <ul className={s.list}>
      {stats.map((item) => (
        <StatsItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default StatsList;
