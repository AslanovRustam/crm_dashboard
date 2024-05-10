"use client";
import type { FC } from "react";
import React, { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { IPromo } from "@/types/interface";
import AddCompany from "@/components/AddNewCompany/AddNewCompany";
import s from "./companies.module.css";
import DeleteCompany from "@/components/DeleteCompany/DeleteCompany";
import { companyList } from "@/data/data";
import { selectCompanies } from "@/app/lib/selectors";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { addPromoToCompany } from "@/app/lib/companySlice";
import AddPromotion from "../AddPromotion/AddPromotion";
import Title from "../Title/Title";
import Button from "../Button/Button";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import Modal from "../Modal/Modal";

interface CompanyComponentProps {
  params: { id: string };
}

const CompanyComponent: FC<CompanyComponentProps> = ({ params }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const currentCompany: any = useAppSelector(selectCompanies).find(
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

export default CompanyComponent;
