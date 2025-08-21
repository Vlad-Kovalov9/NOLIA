import { NavLink } from "react-router-dom";
import s from "./AppBar.module.css";

export default function AppBar() {
  return (
    <div className={s.container}>
      <NavLink to="/" className={s.logo}>
        NOLIA
      </NavLink>
    </div>
  );
}
