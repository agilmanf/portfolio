import Maintenance from "./Maintenance";
import Header from "../components/Header";

export default function Home() {
  if (import.meta.env.VITE_MAINTENANCE_MODE != false) {
    return <Maintenance />;
  }

  return (
    <>
      <Header />
    </>
  );
}
