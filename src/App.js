import {useState} from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Menu from "./components/Menu";
import ErrorPage from "./components/ErrorPage";
import ErrorBoundary from "./components/ErrorBoundary";
import ContactUs from "./components/ContactUs";
import Promo from "./components/Promo";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { LoginContext } from "./Contexts/LoginContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import RequireAuth from "./components/RequireAuth";
import Cartpage from "./components/Cartpage";

function App() {
  return (
    <div className="App">
      <LoginContext>
      <NavBar />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />}/>
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/promos" element={<Promo />} />
          <Route path="/login" element={ <Login/>} />
          <Route path="/cart" element={<Cartpage/>} />
          <Route path="/profile" element={ <RequireAuth><Profile/></RequireAuth>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
      <Footer/>
      </LoginContext>
    </div>
    
  );
}

export default App;
