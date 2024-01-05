import StatusLabel, { Status } from "./components/StatusLabel/StatusLabel";

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <StatusLabel status={Status.active}>Active</StatusLabel>
      <StatusLabel status={Status.notActive}>Not Active</StatusLabel>
    </main>
  );
}
