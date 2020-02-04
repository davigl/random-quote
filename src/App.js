import React, { useEffect } from "react";
import QuoteBox from "./components/QuoteBox";

import "font-awesome/css/font-awesome.min.css";
import "./assets/styles/global.scss";

function App() {
  useEffect(() => {
    document.title = "Random Quote Machine - FCC";
  }, []);

  return <QuoteBox />;
}

export default App;
