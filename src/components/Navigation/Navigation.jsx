import { NavLink } from "react-router-dom";

import NavigationAuth from "./NavifationAuth/NavigationAuth";

import css from './Navigation.module.css';

import items from "./items";

const elements = items.map(({ id, text, link }) => <li key={id}>
        <NavLink  to={link}>{text}</NavLink>
    </li>);

const Navigation = () => {
    return (
        <div className={css.navigation}>
            <ul>
                {elements}
            </ul>
            <NavigationAuth />
        </div>
    )
}

export default Navigation;
