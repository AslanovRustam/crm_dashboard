import type { FC, ReactNode } from "react";
import s from "./modal.module.css";
import React from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  //   const handleModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
  //     if (e.target === e.currentTarget) {
  //       onClose();
  //     }
  //     return;
  //   };
  return (
    // <div className={s.backdrop} onClick={handleModalClose}>
    <div className={s.backdrop}>{children}</div>
  );
};

export default Modal;
