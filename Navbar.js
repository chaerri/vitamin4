// import React
import React from "react";
// Import Link to navigate between pages
import {Link} from "react-router-dom";
// Import the CSS file for styling
import './Navbar.css';

const Navbar = () => {
    return (
     // fill in the rest here!
     <nav>
     <Link to="/">Home</Link>
     <Link to="/NotHome">NotHome</Link>
     </nav>
     // add Home and NotHome, including links (after routing established)
    )
  };
  
  export default Navbar;
  // Always export your components so they can be imported in other files
  