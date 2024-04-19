import { StoreProvider } from "./lib/StoreProvider";
import UserLogin from "@/components/User/UserLogin";
import s from "./homepage.module.css";
import TextGlich from "@/components/TextGlitch/TextGlitch";

export default function Home() {
  const text = "Home page";
  return (
    <main className={s.main}>
      <TextGlich text={text} />
      <StoreProvider>
        <UserLogin />
      </StoreProvider>
    </main>
  );
}
