import type { FC } from "react";
import s from "./company.module.css";
import { ICompany } from "@/types/interface";
import CompanyItem from "./CompanyItem";

interface CompanyListProps {
  data: ICompany[];
}

const CompanyList: FC<CompanyListProps> = ({ data }) => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li className={s.itemHead}>
          <p className={s.categoryHead}>Category</p>
          <p className={s.nameHead}>Company</p>
          <p className={s.statusHead}>Status</p>
          <p className={s.promotionHead}>Promotion</p>
          <p className={s.countryHead}>Country</p>
          <p className={s.dataHead}>Joined data</p>
        </li>
        {data.map((item) => (
          <CompanyItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
