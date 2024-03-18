import Maintenance from "src/pages/Maintenance";
import Header from "src/components/Header";
import About from "src/components/About";

export default function Home() {
  if (import.meta.env.VITE_MAINTENANCE_MODE != false) {
    return <Maintenance />;
  }

  return (
    <>
      <Header />
      <About />
    </>
  );
}
