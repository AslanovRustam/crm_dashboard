import React from "react";
import Sidebar from "../../components/SidebarComponent/SidebarComponent";
import { StoreProvider } from "../lib/StoreProvider";
import s from "./admin.module.css";

export interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <StoreProvider>
      <main className={s.main}>
        <Sidebar />
        <section className={s.children}>{children}</section>
      </main>
    </StoreProvider>
  );
};

export default layout;
