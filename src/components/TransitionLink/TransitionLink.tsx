"use client";

import { useRouter } from "next/navigation";
import { animatePageOut } from "@/app/animations";
import { ReactNode } from "react";
import s from "./transition.module.css";

export default function TransitionLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(href, router);
  };

  return (
    <button
      className={`${s.default} ${className && s[className]}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
