import React from "react";

import Header from "../components/common/Header";
import Play from "../components/modules/Play";
import Footer from "../components/common/Footer";

export default function PlayRoute() {
  React.useEffect(() => {
    document.title = "Play";
  }, []);

  return (
    <div>
      <Header />
      <Play />
      <Footer />
    </div>
  );
}
