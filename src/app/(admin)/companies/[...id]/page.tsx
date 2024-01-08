import React from "react";

export interface ICompanyProps {
  params: { id: string[] };
}

const Company = ({ params }: ICompanyProps) => {
  return <div>Company {String(params.id)}</div>;
};

export default Company;
