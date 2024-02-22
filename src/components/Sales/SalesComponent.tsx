import type { FC } from "react";
import s from "./sales.module.css";
import Logo from "../../../public/logo.svg";
import TextTitle from "../TextTitle/TextTitle";

interface SalesComponentProps {}

const SalesComponent: FC<SalesComponentProps> = () => {
  return (
    <div>
      <TextTitle text='Sales details'/>
    </div>
  );
};

export default SalesComponent;
