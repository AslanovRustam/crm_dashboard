import Link from "next/link";
import s from "./homepage.module.css";

export default function Home() {
  const text = "Home page";
  return (
    <main className={s.main}>
      <h1 className={s.title} data-text={text}>
        {text}
      </h1>
      <Link href="/companies">
        <p className={s.btn}>go to dashboard</p>
      </Link>
    </main>
  );
}
