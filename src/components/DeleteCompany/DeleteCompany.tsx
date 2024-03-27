import type { FC } from "react";
import Button from "../Button/Button";
import { useAppDispatch } from "@/app/lib/hooks";
import { useRouter } from "next/navigation";
import { deleteCompany } from "@/app/lib/companySlice";
import TitleSection from "../Title/TitleSection";
import s from "./deletecompany.module.css";

interface DeleteCompanyProps {
  onClose: () => void;
  companyId: number;
  name: string;
}

const DeleteCompany: FC<DeleteCompanyProps> = ({
  companyId,
  onClose,
  name,
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleDeleteBtn = () => {
    dispatch(deleteCompany(companyId));
    router.back();
  };

  return (
    <section className={s.container}>
      <TitleSection text={`Are you sure you want to delete ${name} company?`} />
      <div className={s.wrapper}>
        <Button name="Cancel" onClick={() => onClose()} />
        <Button name="DELETE" onClick={handleDeleteBtn} delete />
      </div>
    </section>
  );
};

export default DeleteCompany;
