import "./Navbar.css";
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar__left">
            <NavLink to="/" activeClassName="is-active"> Employee System </NavLink>
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
            <NavLink to="/Login" activeClassName="is-active">
            <i className="fa fa-user" aria-hidden="true"></i>
            </NavLink>
        </div>
        </nav>
  );
};

export default Navbar;