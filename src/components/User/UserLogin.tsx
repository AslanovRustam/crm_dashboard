"use client";
import { useState, type FC, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { addUserName } from "@/app/lib/userSlice";
import Input from "../Input/Input";
import Button from "../Button/Button";
import s from "./user.module.css";
import { selectUser } from "@/app/lib/selectors";

interface UserLoginProps {}

const UserLogin: FC<UserLoginProps> = () => {
  const [user, setUser] = useState(useAppSelector(selectUser) ?? "");
  const [error, setError] = useState(false);

  const disPatch = useAppDispatch();
  const router = useRouter();

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUser(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.trim() === "") {
      setError(true);
      return;
    }
    disPatch(addUserName(user));
    setError(false);
    router.push("/dashboard");
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <Input
        type="text"
        title="Name"
        onChange={onHandleChange}
        value={user}
        placeholder="Type your name"
        error={error}
      />
      <Button
        name="Login"
        onClick={() => console.log("you in")}
        type="submit"
      />
    </form>
  );
};

export default UserLogin;
