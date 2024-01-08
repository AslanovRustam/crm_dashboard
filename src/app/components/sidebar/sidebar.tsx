import React from "react";
// import logo from "../../../../public/logo.svg";
import Logo from "../../../../public/logo.svg";
import s from "./sidebar.module.css";

type Props = {};

const Sidebar = ({}: Props) => {
  return (
    <aside className={s.container}>
      {/* <Image
        src={logo}
        alt="logo icon"
        className={s.logo}
        objectFit="contain"
      /> */}

      <Logo className={s.logo} />
    </aside>
  );
};

export default Sidebar;
