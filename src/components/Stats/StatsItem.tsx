"use client";
import { type FC, useState, useEffect } from "react";
import { IStat } from "@/types/interface";
import s from "./stats.module.css";

interface StatsItemProps {
  item: IStat;
}

const StatsItem: FC<StatsItemProps> = ({ item: { text, count } }) => {
  const [currentCount, setCurrentCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCount((prevCount) => {
        if (prevCount < count) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return count;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, [count]);
  return (
    <li className={s.item}>
      <p className={s.title}>{text}</p>
      <p className={s.count}>{currentCount}</p>
    </li>
  );
};

export default StatsItem;
