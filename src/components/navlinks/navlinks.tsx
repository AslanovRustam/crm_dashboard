"use client";
import type { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../../public/logo.svg";
import DashboardIcon from "../../../public/dashboard.svg";
import BriefcaseIcon from "../../../public/briefcase.svg";
import s from "./navlinks.module.css";

interface NavlinksProps {
  // params: string;
}

const Navlinks: FC<NavlinksProps> = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <>
      <Link href="/" className={s.logoContainer}>
        <Logo className={s.logo} />
      </Link>
      <nav className={s.list}>
        <Link
          href="/dashboard"
          className={`${s.item} ${isActive("/dashboard") && s.active}`}
        >
          <DashboardIcon className={s.icon} />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/companies"
          className={`${s.item} ${isActive("/companies") && s.active}`}
        >
          <BriefcaseIcon className={s.icon} />
          <span>Companies</span>
        </Link>
      </nav>
    </>
  );
};

export default Navlinks;
