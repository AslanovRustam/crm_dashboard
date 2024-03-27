"use client";
import type { FC } from "react";
import s from "./company.module.css";
import CompanyItem from "./CompanyItem";
import { useAppSelector } from "@/app/lib/hooks";
import { selectFilteredCompanies } from "@/app/lib/selectors";

interface CompanyListProps {}

const CompanyList: FC<CompanyListProps> = () => {
  const companyList = useAppSelector(selectFilteredCompanies);
  console.log("companies", companyList);
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li className={s.itemHead}>
          <p className={s.categoryHead}>Category</p>
          <p className={s.nameHead}>Company</p>
          <p className={s.status}>Status</p>
          <p className={s.promotion}>Promotion</p>
          <p className={s.country}>Country</p>
          <p className={s.data}>Joined data</p>
        </li>
        {companyList.map((item) => (
          <CompanyItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
