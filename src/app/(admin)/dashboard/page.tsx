import Sales from "@/components/Sales/Salex";
import StatsList from "@/components/Stats/StatsList";
import Title from "@/components/Title/Title";
import React from "react";

export interface IDashboardsProps {}

const Dashboards = ({}: IDashboardsProps) => {
  return (
    <section>
      <Title text="Dashboards" />
      <StatsList />
      <div>
        <Sales />
      </div>
    </section>
  );
};

export default Dashboards;
