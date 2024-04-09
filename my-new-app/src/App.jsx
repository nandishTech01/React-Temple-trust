import "./App.css";
import Nav from "./components/shared/Nav";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import NotFound from "./components/shared/NotFound";
import Contact from "./components/Contact";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>

      </>
    );
  }
}
export default App;
