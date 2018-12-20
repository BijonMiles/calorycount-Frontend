import React, {Component} from "react";
import { Link } from "react-router-dom";


// const NavBar = props => {
class NavBar extends Component {


  handleLogClick = (e) => {
    e.preventDefault()

    if (localStorage.token) {
      localStorage.removeItem('token')

      e.target.innerText = "Login"
    }
  }
  render() {

    return (
      <ul className="navbar">
      <Link to="/">
      <li className="navhome">Home</li>
      </Link>

      <Link to="/login" >
      <li className="navitem" > {localStorage.token ? "Logout" : "Login"} </li>
      </Link>

      <Link to="/signup">
      <li className="navitem">Sign Up</li>
      </Link>
      </ul>
    );
  }
}
// };

export default NavBar;
