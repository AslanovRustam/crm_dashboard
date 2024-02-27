import type { FC } from "react";
import TitleSection from "../Title/TitleSection";
import map from "../../../public/World.png";
import Image from "next/image";
import s from "./countries.module.css";

interface CountriesProps {}

const countries = [
  { id: 0, name: "Canada", count: 2 },
  { id: 1, name: "USA", count: 4 },
  { id: 2, name: "Italia", count: 7 },
  { id: 3, name: "Ukraine", count: 2 },
  { id: 4, name: "Spain", count: 3 },
];

const Countries: FC<CountriesProps> = () => {
  return (
    <div className={s.container}>
      <TitleSection text="Countries of companies" />
      <div className={s.wrapper}>
        <ul className={s.list}>
          {countries.map(({ id, name, count }) => (
            <li className={s.item} key={id}>
              <span className={s.name}>{name} - </span>
              <span className={s.count}>{count}</span>
            </li>
          ))}
        </ul>
        <Image src={map} alt="map" className={s.map} />
      </div>
    </div>
  );
};

export default Countries;
