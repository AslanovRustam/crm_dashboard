import type { FC } from "react";
import s from "./title.module.css";
// import UserBar from "../User/UserBar";
import { StoreProvider } from "@/app/lib/StoreProvider";
import dynamic from "next/dynamic";

const UserBar = dynamic(() => import("../User/UserBar"), {
  ssr: false,
  loading: () => <p>Loading user info</p>,
});

interface TitleProps {
  text?: string;
}

const Title: FC<TitleProps> = ({ text }) => {
  return (
    <div className={s.container}>
      {text && <h1 className={s.title}>{text}</h1>}
      <StoreProvider>
        <UserBar />
      </StoreProvider>
    </div>
  );
};

export default Title;
