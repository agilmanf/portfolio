import Maintenance from "src/pages/Maintenance";
import Header from "src/components/Header";

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
