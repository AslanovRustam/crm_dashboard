import React from "react";
import s from "./sidebar.module.css";
import Navlinks from "../Navlinks/Navlinks";

type Props = {};

const Sidebar = ({}: Props) => {
  return (
    <aside className={s.container}>
      <Navlinks />
    </aside>
  );
};

export default Sidebar;
