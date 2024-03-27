import React from "react";
import Categories from "../../../components/Categories/Categories";
import Sales from "../../../components/Sales/Salex";
import StatsList from "../../../components/Stats/StatsList";
import Title from "../../../components/Title/Title";
import Countries from "../../../components/Countries/Countries";
import { companySales, companySalesTitles } from "../../../data/data";
import s from "./dashboard.module.css";
import PromoChart from "@/components/PromoChart/PromoChart";
import { Metadata } from "next";

export interface IDashboardsProps {}

export const metadata: Metadata = {
  title: "CRM Dashboard | Dasboard ",
};

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
      </div>
    </section>
  );
};

export default Dashboards;
