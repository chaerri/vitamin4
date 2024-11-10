import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js' ;
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Home from './pages/Home.js';
import NotHome from './pages/NotHome.js';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NotHome" element={<NotHome />} />
      </Routes>
      </div>
    
  );
}

export default App;
