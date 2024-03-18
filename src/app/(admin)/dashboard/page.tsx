import React from "react";
import Categories from "../../../components/Categories/Categories";
import Sales from "../../../components/Sales/Salex";
import StatsList from "../../../components/Stats/StatsList";
import Title from "../../../components/Title/Title";
import Countries from "../../../components/Countries/Countries";
import {
  companySales,
  promotions,
  promotionsTitles,
  companySalesTitles,
} from "../../../data/data";
import s from "./dashboard.module.css";
import PromoChart from "@/components/PromoChart/PromoChart";

export interface IDashboardsProps {}

const Dashboards = ({}: IDashboardsProps) => {
  return (
    <section>
      <Title text="Dashboards" />
      <StatsList />
      <div className={s.container}>
        <PromoChart title="Promotions" />

        <Categories />
      </div>
      <div className={s.container}>
        <Countries />
        <Sales
          data={companySales}
          width={false}
          titles={companySalesTitles}
          title="Sales details"
        />
        {/* <Sales
          data={promotions}
          width
          titles={promotionsTitles}
          title="Promotions"
        /> */}
      </div>
    </section>
  );
};

export default Dashboards;
