import { NavLink } from "react-router-dom";


const Menu = () => {
    return (
        <nav>
            <NavLink
                /*className={({ isActive }) => isActive ? 'activeLink' : 'link'}*/
                style={({ isActive }) => isActive ? { color: 'lightyellow', textDecoration: 'none' } : {}}
                to="."
                end>Home</NavLink>
            <NavLink to="courses">Courses</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'activeLink' : 'link'} to="About" >About</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'activeLink' : 'link'} to="Contacts" >Contacts</NavLink>
        </nav>
    );
};

export default Menu;