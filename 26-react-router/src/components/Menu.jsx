import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <NavLink style={({ isActive }) => isActive ? { color: 'lightyellow', textDecoration: 'none' } : {}} to="." end>Home</NavLink>
            <NavLink to="courses">Courses</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'activeLink' : 'Link'} to="about">About</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'activeLink' : 'Link'} to="contacts">Contacts</NavLink>
        </nav>
    );
};
/*
свойство end добавляется для того чтобы снять выделение(сделать не активным)
 с index пункта меню home
*/
export default Menu;