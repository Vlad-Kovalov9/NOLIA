import { NavLink } from "react-router-dom";
import s from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";

export default function AppBar() {
  return (
    <div className={s.container}>
      <NavLink to="/" className={s.logo}>
        NOLIA
      </NavLink>

      <Navigation />
    </div>
  );
}
