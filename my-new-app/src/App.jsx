import "./App.css";
import Nav from "./components/shared/Nav";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import Welcome from "./components/Welcome";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import NotFound from "./components/shared/NotFound";
import Contact from "./components/Contact";



function App() {
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

export default App;
