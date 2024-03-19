import { StoreProvider } from "./lib/StoreProvider";
import UserLogin from "@/components/User/UserLogin";
import s from "./homepage.module.css";

export default function Home() {
  const text = "Home page";
  return (
    <main className={s.main}>
      <h1 className={s.title} data-text={text}>
        {text}
      </h1>
      <StoreProvider>
        <UserLogin />
      </StoreProvider>
    </main>
  );
}
