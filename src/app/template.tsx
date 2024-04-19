"use client";
import { useEffect } from "react";
import { animatePageIn } from "./animations";
import s from "./homepage.module.css";
import TextGlich from "@/components/TextGlitch/TextGlitch";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <div id="transition-element" className={s.transition}>
        <TextGlich text="Loading..." />
      </div>
      {children}
    </div>
  );
}
