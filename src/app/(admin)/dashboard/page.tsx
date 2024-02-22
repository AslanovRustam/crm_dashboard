import SalesComponent from "@/components/Sales/SalesComponent";
import StatsList from "@/components/Stats/StatsList";
import Title from "@/components/Title/Title";
import React from "react";

export interface IDashboardsProps {}

const Dashboards = ({}: IDashboardsProps) => {
  return (
    <div>
      <Title text="Dashboards" />
      <StatsList />
      <div>
        <SalesComponent/>
      </div>
    </div>
  );
};

export default Dashboards;
