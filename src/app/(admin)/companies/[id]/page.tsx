import React from "react";

import CompanyComponent from "@/components/CompanyComponent/CompanyComponent";

export interface ICompanyProps {
  params: { id: string };
}

const Company = ({ params }: ICompanyProps) => {
  return <CompanyComponent params={params} />;
};

export default Company;
