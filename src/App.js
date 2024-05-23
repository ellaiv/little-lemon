import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";
import MainContent from "./components/main/MainContent";

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
