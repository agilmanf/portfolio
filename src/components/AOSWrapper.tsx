import React from "react";
import AOS from "aos";

import "aos/dist/aos.css";

export default function AOSWrapper({
  children,
}: {
  children: React.ReactElement;
}) {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    AOS.refresh();
  }, []);

  return children;
}
