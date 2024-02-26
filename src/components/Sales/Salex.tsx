import type { FC } from "react";
import TitleSection from "../Title/TitleSection";
import RowHead from "../RowHead/RowHead";
import Logo from "../../../public/companyLogo.svg";
import Row from "../RowHead/Row";
import s from "./sales.module.css";

interface SalesProps {}

const companySales = [
  {
    id: 0,
    logo: <Logo className={s.logo} />,
    name: "Costco Wholesale",
    sold: 459,
    income: "$600",
  },
  {
    id: 0,
    logo: <Logo className={s.logo} />,
    name: "Costco Wholesale",
    sold: 459,
    income: "$600",
  },
  {
    id: 0,
    logo: <Logo className={s.logo} />,
    name: "Costco Wholesale",
    sold: 459,
    income: "$600",
  },
  {
    id: 0,
    logo: <Logo className={s.logo} />,
    name: "Costco Wholesale",
    sold: 459,
    income: "$600",
  },
  {
    id: 0,
    logo: <Logo className={s.logo} />,
    name: "Costco Wholesale",
    sold: 459,
    income: "$600",
  },
  {
    id: 0,
    logo: <Logo className={s.logo} />,
    name: "Costco Wholesale",
    sold: 459,
    income: "$600",
  },
];

const Sales: FC<SalesProps> = () => {
  return (
    <div>
      <TitleSection text="Sales details" />
      <div>
        <RowHead first="Company" second="Sold" third="Income" />
        {companySales?.map(({ id, logo, name, sold, income }) => (
          <Row key={id} logo={logo} name={name} sold={sold} income={income} />
        ))}
      </div>
    </div>
  );
};

export default Sales;
