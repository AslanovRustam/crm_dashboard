import React from "react";
import s from "./statuslabel.module.css";
import { Status } from "@/types/interface";

export interface IStatusLabel {
  children: React.ReactNode;
  status: Status;
}

const StatusLabel = ({ children, status }: IStatusLabel) => {
  return (
    <div className={`${s.label} ${s[status]}`}>
      <div className={s.dot} />
      {children}
    </div>
  );
};

export default StatusLabel;
