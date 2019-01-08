import React, {Component} from "react";
import { Link, withRouter } from "react-router-dom";



// const NavBar = props => {
class NavBar extends Component {


  // handleLogClick = (e) => {
  //   e.preventDefault()
  //
  //   debugger
  //
  //   if (localStorage.token) {
  //     localStorage.removeItem('token')
  //
  //     // e.target.innerText = "Login"
  //     this.props.history.push('/')
  //   }
  // }
  render() {

    return (
      <ul className="navbar">
        <Link to="/welcome">
        <li className="navhome">Welcome</li>
        </Link>

      { localStorage.token ?
        (<span>
          <li className="navitem" onClick={this.props.handleLogClick} >{localStorage.token ? "Logout" : "Login"}</li>
        </span>
        )
        :
        (<Link to="/login" >
          <li className="navitem"  >{localStorage.token ? "Logout" : "Login"}</li>
        </Link>)
      }


      {localStorage.token ?
        (<Link to="/profile">
        <li className="navitem">Profile</li>
        </Link>)
        :
        (<Link to="/signup">
          <li className="navitem" >SignUp</li>
        </Link>)
      }

      <Link to="/">
      <li className="navitem">Home</li>
      </Link>


      </ul>
    );
  }
}

// <Link to="/profile">
// <li className="navitem">Profile</li>
// </Link>
// };

export default withRouter(NavBar);
