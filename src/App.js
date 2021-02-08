import React from "react";

import "./App.css";
import Navbar from "./components/hearder/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
