
import { NavLink } from "react-router-dom";

import css from './NavigationAuth.module.css';

const NavigationAuth = () => {
return (
    
<div>
<NavLink className={css.link} to="/register">Registration</NavLink> |
<NavLink className={css.link} to="/login">Login</NavLink>
<NavLink to="/phonebookpage"></NavLink>
</div>
)
}

export default NavigationAuth;