"use client";
import Button from "@/components/Button/Button";
import Search from "@/components/Search/Search";
import Title from "@/components/Title/Title";
import React, { useState } from "react";
import { companyList } from "@/data/data";
import s from "../companies.module.css";

export interface ICompanyProps {
  params: { id: string };
}

const Company = ({ params }: ICompanyProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [addCompany, SetAddCompany] = useState(false);

  const currentCompany = companyList.find(
    (item) => item.id === Number(params.id)
  );

  const showAddCompany = () => {
    console.log("clicked");
  };

  return (
    <section>
      <Title text={currentCompany ? currentCompany.name : params.id} />
      <div className={s.formContainer}>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <Button name="Add company" onClick={showAddCompany} />
      </div>
    </section>
  );
};

export default Company;
