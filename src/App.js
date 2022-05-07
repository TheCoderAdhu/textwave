import "./App.css";
import About from "./components.js/About";
import Navbar from "./components.js/Navbar";
import TextForm from "./components.js/TextForm";
import React, { useState } from "react";
import Alert from "./components.js/Alert";
import { Routes, Route } from "react-router-dom";
import Contact from "./components.js/Contact";

function App() {
  const [mode, setMode] = useState("light");
  const [DarkToLightMode, setDarkToLightMode] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);
  const showAlert = (message) => {
    setAlert({
      msg: message,
    });
  };

  const DarkToLightModeFuction = () => {
    setDarkToLightMode("2");
  };
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1f1c1c";
      setDarkToLightMode("Disable Dark Mode");
      showAlert("Dark Mode Has Been Enabled ", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setDarkToLightMode("Enable Dark Mode");
      showAlert("Dark Mode Has Been Disabled ", "success");
    }
  };
  setTimeout(() => {
    setAlert(null);
  }, 2000);
  return (
    <>
      <Navbar
        mode={mode}
        ToggleMode={togglemode}
        DarkToLightModeFuction={DarkToLightModeFuction}
        DarkToLightMode={DarkToLightMode}
      />
      <Alert alert={alert} />

      {/* <About /> */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <TextForm
              Heading="Enter Text "
              value=""
              mode={mode}
              showAlert={showAlert}
            />
          }
        />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
