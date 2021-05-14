import "./Navbar.css";
import {NavLink} from 'react-router-dom'
import axios from "axios";

const Navbar = () => {
    const handleLogout = () => {
        axios
        .get('http://localhost:8080/fortest_war_exploded/LogoutServlet')
        .then((res) => {
            window.location.href='/'
        })
        .catch((error) => {
            alert("fail")
        })
    }
    return (
    <nav className="navbar">
        <div className="navbar__left">
            <NavLink to="/Home" activeClassName="is-active"> Employee System </NavLink>
        </div>
        <div className="navbar__right">
            <NavLink to="/Profile" activeClassName="is-active">
                <i className="fa fa-home" aria-hidden="true"/>
            </NavLink>
            <NavLink to="/ApplyLeave" activeClassName="is-active">
                <i className="fa fa-files-o" aria-hidden="true"></i>
            </NavLink>
            <NavLink to="/Attendance" activeClassName="is-active" >
                <i className="fa fa-clock-o" aria-hidden="true"></i>
            </NavLink>            
            <NavLink to="/Edit" activeClassName="is-active">
            <i className="fa fa-user" aria-hidden="true"></i>
            </NavLink>
            <button onClick={handleLogout}>Logout</button>
        </div>
        </nav>
  );
};

export default Navbar;