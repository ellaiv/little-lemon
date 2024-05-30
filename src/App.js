import React, { useState } from "react";
import Home from "./components/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainContent from "./components/main/MainContent";
import Nav from "./components/navbar/Nav";

import "./App.css";

function App() {
  const [displayMainContent, setDisplayMainContent] = useState(false);

  return (
    <>
      <Header />
      <Nav setDisplayMainContent={setDisplayMainContent} />
      <Home />
      {displayMainContent && <MainContent />}
      <Footer />
    </>
  );
}

export default App;
