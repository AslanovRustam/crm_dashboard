"use client";
import { type FC, useState, useEffect } from "react";
import { IStat } from "@/types/interface";
import s from "./stats.module.css";
import ScrollAnimations from "@/helpers/ScrollAnimation";

interface StatsItemProps {
  item: IStat;
  index: number;
}

const StatsItem: FC<StatsItemProps> = ({ item: { text, count }, index }) => {
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
    }, 5);

    return () => clearInterval(interval);
  }, [count]);
  return (
    <ScrollAnimations>
      <li className={s.item}>
        <p className={s.title}>{text}</p>
        <p className={s.count}>{currentCount}</p>
      </li>
    </ScrollAnimations>
  );
};

export default StatsItem;
