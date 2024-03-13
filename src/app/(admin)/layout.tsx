import React from "react";
import s from "./admin.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";

export interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <>
      <main className={s.main}>
        <Sidebar />
        <section className={s.children}>{children}</section>
      </main>
    </>
  );
};

export default layout;
