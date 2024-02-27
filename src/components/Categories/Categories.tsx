import type { FC } from "react";
import TitleSection from "../Title/TitleSection";
import CategoryItem from "./CategoryItem";
import s from "./categories.module.css";

interface CategoriesProps {}

const categories = [
  { id: 0, name: "Product1", count: 4 },
  { id: 1, name: "Product2", count: 8 },
  { id: 2, name: "Product3", count: 26 },
  { id: 3, name: "Product4", count: 1 },
  { id: 4, name: "Product5", count: 37 },
  { id: 5, name: "Product6", count: 22 },
  { id: 6, name: "Product7", count: 4 },
  { id: 7, name: "Product8", count: 12 },
];

const Categories: FC<CategoriesProps> = () => {
  return (
    <div>
      <TitleSection text="Categories of companies" />
      <ul className={s.list}>
        {categories.map(({ id, name, count }) => (
          <CategoryItem key={id} name={name} count={count} />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
