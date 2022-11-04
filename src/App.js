import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Menu from "./components/Menu";
import ErrorPage from "./components/ErrorPage";
import ErrorBoundary from "./components/ErrorBoundary";
import ContactUs from "./components/ContactUs";
import Promo from "./components/Promo";
import Login from "./components/Login";
import { useState } from "react";
import Profile from "./components/Profile";
import { LoginContext } from "./Contexts/LoginContext";
import NavBar from "./components/NavBar";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [fullname, setFullname] = useState("");

  return (
    <div className="App">
      <NavBar/>
      <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/menu" element={<Menu />}>
          <Route
            path="login"
            element={
              <LoginContext.Provider
                value={{ fullname, setFullname, setShowProfile }}
              >
                {showProfile ? <Profile /> : <Login />}
              </LoginContext.Provider>
            }
          />
        </Route>
        <Route
          path="/contact-us"
          element={<ContactUs />}
        />
        <Route
          path="/promos"
          element={<Promo />}
        />
        <Route
          path="/login"
          element={
            <LoginContext.Provider
              value={{ fullname, setFullname, setShowProfile }}
            >
              {showProfile ? <Profile /> : <Login />}
            </LoginContext.Provider>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
