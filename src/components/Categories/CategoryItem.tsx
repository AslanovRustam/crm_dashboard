"use client";
import type { FC } from "react";
import s from "./categories.module.css";
import ScrollAnimations from "@/helpers/ScrollAnimation";

interface CategoryItemProps {
  name: string;
  count: number;
}

const CategoryItem: FC<CategoryItemProps> = ({ name, count }) => {
  return (
    <ScrollAnimations animation="animationTop">
      <li className={s.item}>
        <p className={s.name}>{name}</p>
        <p className={s.count}>{count}</p>
      </li>
    </ScrollAnimations>
  );
};

export default CategoryItem;
