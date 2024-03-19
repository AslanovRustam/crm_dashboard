"use client";
import type { FC } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/app/lib/hooks";
import { selectUser } from "@/app/lib/selectors";
import s from "./user.module.css";
import Button from "../Button/Button";

interface UserBarProps {}

const UserBar: FC<UserBarProps> = () => {
  const userName = useAppSelector(selectUser);
  const router = useRouter();

  const goBackBtn = () => {
    router.push("/");
  };
  return (
    <div className={s.container}>
      {userName && (
        <>
          <p>
            hello <span className={s.name}>{userName}</span>{" "}
          </p>
          <Button name="LogOut" onClick={goBackBtn} />
        </>
      )}
    </div>
  );
};

export default UserBar;
