"use client";
import React, { ReactNode, useState } from "react";
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
import AddCompany from "@/components/AddNewCompany/AddNewCompany";
import s from "../companies.module.css";
import DeleteCompany from "@/components/DeleteCompany/DeleteCompany";

export interface ICompanyProps {
  params: { id: string };
}

const Company = ({ params }: ICompanyProps) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const currentCompany = useAppSelector(selectCompanies).find(
    (item) => item.id === Number(params.id)
  );

  const dispatch = useAppDispatch();

  const router = useRouter();

  const handleOpenModal = (contentKey: keyof typeof modalContentMap) => {
    setShowModal(!showModal);
    setModalContent(modalContentMap[contentKey]);
  };

  const handleBackBtn = () => {
    router.back();
  };

  const addPromotion = (data: IPromo) => {
    toast.success(`the new promo ${data.name},has been added`);
    dispatch(addPromoToCompany([currentCompany!.id, data]));
  };
  // const updateCompanyInfo = (data: IPromo) => {
  //   toast.success(`Info ${data.name},has been updated`);
  //   dispatch(addPromoToCompany([currentCompany!.id, data]));
  // };

  const modalContentMap = {
    updateCompany: (
      <AddCompany
        onClose={() => setShowModal(false)}
        currentCompany={currentCompany}
      />
    ),
    addPromotion: (
      <AddPromotion
        onClose={() => setShowModal(false)}
        addNewPromo={addPromotion}
      />
    ),
    deleteCompany: (
      <DeleteCompany
        onClose={() => setShowModal(false)}
        companyId={Number(params.id)}
        name={currentCompany?.name ?? "this"}
      />
    ),
  };

  return (
    <section>
      {currentCompany && <Title text={currentCompany.name} />}
      <div className={s.formSingleCompanyContainer}>
        <Button name="Go Back" onClick={handleBackBtn} />
        <Button
          name="Update company info"
          onClick={() => handleOpenModal("updateCompany")}
        />
        <Button
          name="Add promotion"
          onClick={() => handleOpenModal("addPromotion")}
        />
        <Button
          name="DELETE company"
          onClick={() => handleOpenModal("deleteCompany")}
          delete
        />
      </div>
      {currentCompany && <CompanyInfo currentCompany={currentCompany} />}
      {showModal && modalContent && (
        <Modal onClose={() => setShowModal(false)}>{modalContent}</Modal>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </section>
  );
};

export default Company;
