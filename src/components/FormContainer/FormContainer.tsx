"use client";
import { useState, type FC } from "react";
import s from "./formContainer.module.css";
import Search from "../Search/Search";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import AddCompany from "../AddNewCompany/AddNewCompany";

interface FormContainerProps {}

const FormContainer: FC<FormContainerProps> = () => {
  const [addCompany, setAddCompany] = useState(false);

  const showAddCompany = () => {
    setAddCompany(!addCompany);
  };
  return (
    <>
      <div className={s.formContainer}>
        <Search />
        <Button name="Add company" onClick={showAddCompany} />
      </div>
      {addCompany && (
        <Modal onClose={showAddCompany}>
          <AddCompany onClose={showAddCompany} />
        </Modal>
      )}
    </>
  );
};

export default FormContainer;
