"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IPromotionData } from "@/types/interface";
import Button from "@/components/Button/Button";
import Search from "@/components/Search/Search";
import Title from "@/components/Title/Title";
import Modal from "@/components/Modal/Modal";
import AddPromotion from "@/components/AddPromotion/AddPromotion";
import { companyList, currentCompanyDefault } from "@/data/data";
import s from "../companies.module.css";

export interface ICompanyProps {
  params: { id: string };
}

const Company = ({ params }: ICompanyProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [addPromo, setAddPromotion] = useState(false);
  const [currentCompany, setСurrentCompany] = useState(
    companyList.find((item) => item.id === Number(params.id)) ??
      currentCompanyDefault
  );

  const handleOpenModal = () => {
    setAddPromotion(!addPromo);
  };

  const addPromotion = (data: IPromotionData) => {
    toast.success(`the new promo ${data.name},has been added`);
    setСurrentCompany({
      ...currentCompany,
      promo: [...currentCompany.promo, data],
    });
  };
  console.log("currentCompany", currentCompany);

  return (
    <section>
      <Title text={currentCompany ? currentCompany.name : params.id} />
      <div className={s.formContainer}>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <Button name="Add promotion" onClick={handleOpenModal} />
      </div>
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
