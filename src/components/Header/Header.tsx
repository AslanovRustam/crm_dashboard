"use client";
import type { FC } from "react";
import { usePathname } from "next/navigation";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const headerText = usePathname();

  return (
    <>
      <p>{headerText}</p>
    </>
  );
};

export default Header;
