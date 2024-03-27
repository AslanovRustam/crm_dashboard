import dynamic from "next/dynamic";
import React from "react";
import Title from "../../../components/Title/Title";
import FormContainer from "@/components/FormContainer/FormContainer";
import { Metadata } from "next";

const CompanyList = dynamic(
  () => import("../../../components/Company/CompanyList"),
  {
    ssr: false,
    loading: () => <p>Loading list of companies...</p>,
  }
);

export interface ICompaniesProps {}

export const metadata: Metadata = {
  title: "CRM Dashboard | Companies ",
};

const Companies = ({}: ICompaniesProps) => {
  return (
    <section>
      <Title text="Companies" />
      <FormContainer />
      <CompanyList />
    </section>
  );
};

export default Companies;
