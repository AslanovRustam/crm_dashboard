import Link from "next/link";
// import StatusLabel, { Status } from "./components/statusLabel/StatusLabel";
import s from "./homepage.module.css";

export default function Home() {
  return (
    <main className={s.main}>
      <h1 className={s.title} data-text="Home page">
        Home page
      </h1>
      <Link href="/companies">
        <p className={s.btn}>go to content</p>
      </Link>
      {/* <StatusLabel status={Status.active}>Active</StatusLabel>
      <StatusLabel status={Status.notActive}>Not Active</StatusLabel> */}
    </main>
  );
}
