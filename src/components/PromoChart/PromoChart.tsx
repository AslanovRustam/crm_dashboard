"use client";
import type { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useAppSelector } from "@/app/lib/hooks";
import { selectCompanies } from "@/app/lib/selectors";
import TitleSection from "../Title/TitleSection";
import s from "./promoChart.module.css";

interface PromoChartProps {
  title: string;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, //disable legend of the promo
    },
    title: {
      display: true,
      text: "Count of promo",
    },
  },
};

const PromoChart: FC<PromoChartProps> = ({ title }) => {
  const companies = useAppSelector(selectCompanies);

  return (
    <div className={s.container}>
      <TitleSection text={title} />
      <Bar
        options={options}
        data={{
          labels: companies.map((item) => item.name),
          datasets: [
            {
              label: "promo",
              data: companies.map((item) => item.promo.length),
              backgroundColor: ["#d9f99d", "#e9d5ff"],
              hoverBackgroundColor: "#111827",
              borderRadius: 5,
            },
          ],
        }}
      />
    </div>
  );
};

export default PromoChart;
