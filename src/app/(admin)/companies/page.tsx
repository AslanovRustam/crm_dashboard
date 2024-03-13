"use client";
import Search from "../../../components/Search/Search";
import Title from "../../../components/Title/Title";
import React, { useState } from "react";
import s from "./companies.module.css";
import Button from "../../../components/Button/Button";
import CompanyList from "../../../components/Company/CompanyList";
import { useAppSelector } from "../../lib/hooks";
import { selectFilteredCompanies } from "../../lib/selectors";
import Modal from "../../../components/Modal/Modal";
import AddCompany from "../../../components/AddCompany/AddCompany";

export interface ICompaniesProps {}

const Companies = ({}: ICompaniesProps) => {
  const [addCompany, setAddCompany] = useState(false);

  const companyList = useAppSelector(selectFilteredCompanies);
  // console.log("companies", companyList);

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
          <div className={s.soon}>
            minions work with this feature and soon it will be possible to try
            it out
            <Button name="CLOSE" onClick={showAddCompany} />
          </div>
          {/* <AddCompany onClose={showAddCompany} /> */}
        </Modal>
      )}
    </section>
  );
};

export default Companies;
