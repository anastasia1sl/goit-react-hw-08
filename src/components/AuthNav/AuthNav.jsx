import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.navBox}>
      <NavLink to="/login" className={css.navLink}>
        Login
      </NavLink>
      <NavLink to="/register" className={css.navLink}>
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
