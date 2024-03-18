"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useAppSelector } from "../../lib/hooks";
import { selectFilteredCompanies } from "../../lib/selectors";
import Search from "../../../components/Search/Search";
import Title from "../../../components/Title/Title";
import Button from "../../../components/Button/Button";
import Modal from "../../../components/Modal/Modal";
import AddCompany from "../../../components/AddNewCompany/AddNewCompany";
import s from "./companies.module.css";
const CompanyList = dynamic(
  () => import("../../../components/Company/CompanyList"),
  {
    ssr: false,
    loading: () => <p>Loading list of companies...</p>,
  }
);

export interface ICompaniesProps {}

const Companies = ({}: ICompaniesProps) => {
  const [addCompany, setAddCompany] = useState(false);

  const companyList = useAppSelector(selectFilteredCompanies);
  console.log("companies", companyList);

  const showAddCompany = () => {
    setAddCompany(!addCompany);
  };

  return (
    <section>
      <Title text="Companies" />
      <div className={s.formContainer}>
        <Search />
        <Button name="Add company" onClick={showAddCompany} />
      </div>
      <CompanyList data={companyList} />
      {addCompany && (
        <Modal onClose={showAddCompany}>
          <AddCompany onClose={showAddCompany} />
        </Modal>
      )}
    </section>
  );
};

export default Companies;
