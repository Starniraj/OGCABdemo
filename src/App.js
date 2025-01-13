import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Services from "./components/Services";
import Support from "./components/Support";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
