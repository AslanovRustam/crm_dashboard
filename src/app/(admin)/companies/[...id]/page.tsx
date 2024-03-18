"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { IPromo } from "@/types/interface";
import Button from "../../../../components/Button/Button";
import Title from "../../../../components/Title/Title";
import Modal from "../../../../components/Modal/Modal";
import AddPromotion from "../../../../components/AddPromotion/AddPromotion";
import CompanyInfo from "../../../../components/CompanyInfo/CompanyInfo";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { selectCompanies } from "../../../lib/selectors";
import { addPromoToCompany } from "../../../lib/companySlice";
import s from "../companies.module.css";

export interface ICompanyProps {
  params: { id: string };
}

const Company = ({ params }: ICompanyProps) => {
  const [addPromo, setAddPromotion] = useState(false);
  const currentCompany = useAppSelector(selectCompanies).find(
    (item) => item.id === Number(params.id)
  );

  const dispatch = useAppDispatch();

  const router = useRouter();
  const handleOpenModal = () => {
    setAddPromotion(!addPromo);
  };
  const handleBackBtn = () => {
    router.back();
  };

  const addPromotion = (data: IPromo) => {
    toast.success(`the new promo ${data.name},has been added`);
    dispatch(addPromoToCompany([currentCompany!.id, data]));
  };

  return (
    <section>
      <Title text={currentCompany!.name} />
      <div className={s.formSingleCompanyContainer}>
        <Button name="Go Back" onClick={handleBackBtn} />
        <Button name="Add promotion" onClick={handleOpenModal} />
      </div>
      {currentCompany && <CompanyInfo currentCompany={currentCompany} />}
      {addPromo && (
        <Modal onClose={handleOpenModal}>
          <AddPromotion onClose={handleOpenModal} addNewPromo={addPromotion} />
        </Modal>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </section>
  );
};

export default Company;
