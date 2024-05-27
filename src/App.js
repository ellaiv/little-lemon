import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainContent from "./components/main/MainContent";
import Nav from "./components/navbar/Nav";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
