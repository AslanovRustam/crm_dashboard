import type { FC } from "react";
import TitleSection from "../Title/TitleSection";
import map from "../../../public/World.png";
import Image from "next/image";
import s from "./countries.module.css";
import { countries } from "@/data/data";

interface CountriesProps {}

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
