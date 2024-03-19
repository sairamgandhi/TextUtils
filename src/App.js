import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar.js";
import About from "./Components/About.js";
import TextForm from "./Components/TextForm.js";
import Alert from "./Components/Alert.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import About from "./Components/About.js";

function App() {
  const [mode, enableMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 800);
  };

  const toggleMode = () => {
    if (mode === "light") {
      enableMode("dark");
      document.body.style.backgroundColor = "#042643";
      showAlert("Dark mode has been enabled", "success");
    } else {
      enableMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar Title="Home" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <TextForm
                  area="Enter your text"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
