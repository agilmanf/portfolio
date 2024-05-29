import { Link } from "react-router-dom";

import Maintenance from "src/pages/Maintenance";
import { Button } from "src/components/ui/button";

export default function NotFound() {
  if (import.meta.env.VITE_MAINTENANCE_MODE != false) {
    return <Maintenance />;
  }

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen -mt-10 px-8">
      <img className="max-w-xl" src="/images/404.svg" alt="Page Not Found" />
      <div className="text-center mt-4 max-w-5xl">
        <h1 className="text-white font-opensans font-bold text-4xl mb-4">
          Page Not Found
        </h1>
        <Link to="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
    </main>
  );
}
