"use client";
import Search from "@/components/Search/Search";
import Title from "@/components/Title/Title";
import React, { useState } from "react";
import s from "./companies.module.css";
import Button from "@/components/Button/Button";
import CompanyList from "@/components/Company/CompanyList";
import { companyList } from "@/data/data";

export interface ICompaniesProps {}

const Companies = ({}: ICompaniesProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [addCompany, SetAddCompany] = useState(false);

  const showAddCompany = () => {
    console.log("clicked");
  };

  return (
    <section>
      <Title text="Companies" />
      <div className={s.formContainer}>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <Button name="Add company" onClick={showAddCompany} />
      </div>
      <CompanyList data={companyList} />
    </section>
  );
};

export default Companies;
