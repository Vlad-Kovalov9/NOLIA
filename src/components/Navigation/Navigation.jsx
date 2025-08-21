import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={s.navigation}>
      <NavLink to="/" className={s.link}>
        Advantages
      </NavLink>

      <NavLink to="/" className={s.link}>
        Catalog
      </NavLink>

      <NavLink to="/" className={s.link}>
        Delivery
      </NavLink>

      <NavLink to="/" className={s.link}>
        Reviews
      </NavLink>

      <NavLink to="/" className={s.link}>
        Contacts
      </NavLink>
    </nav>
  );
}
