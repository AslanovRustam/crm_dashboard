"use client";
import type { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../../public/logo.svg";
import DashboardIcon from "../../../public/dashboard.svg";
import BriefcaseIcon from "../../../public/briefcase.svg";
import s from "./navlinks.module.css";
import TransitionLink from "../TransitionLink/TransitionLink";

interface NavlinksProps {
  // params: string;
}

const Navlinks: FC<NavlinksProps> = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname.includes(path);

  return (
    <>
      <Link href="/" className={s.logoContainer}>
        <TransitionLink href="/">
          <Logo className={s.logo} />
        </TransitionLink>
      </Link>
      <nav className={s.list}>
        {/* <TransitionLink href="/dashboard"> */}
        <Link
          href="/dashboard"
          className={`${s.item} ${isActive("/dashboard") && s.active}`}
        >
          <DashboardIcon className={s.icon} />
          <span>Dashboard</span>
        </Link>
        {/* </TransitionLink> */}
        {/* <TransitionLink href="/companies"> */}
        <Link
          href="/companies"
          className={`${s.item} ${isActive("/companies") && s.active}`}
        >
          <BriefcaseIcon className={s.icon} />
          <span>Companies</span>
        </Link>
        {/* </TransitionLink> */}
      </nav>
    </>
  );
};

export default Navlinks;
