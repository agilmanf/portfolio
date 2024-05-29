import Maintenance from "src/pages/Maintenance";
import Header from "src/components/Header";
import About from "src/components/About";
import Projects from "src/components/Projects";
import Footer from "src/components/Footer";

export default function Home() {
  if (import.meta.env.VITE_MAINTENANCE_MODE != false) {
    return <Maintenance />;
  }

  return (
    <>
      <Header />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
