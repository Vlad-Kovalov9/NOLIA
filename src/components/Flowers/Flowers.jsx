import { NavLink } from "react-router-dom";
import s from "./Flowers.module.css";
import FlowersList from "../FlowersList/FlowersList";
import flowersData from "../../../flowersData.json";

export default function Flowers() {
  return (
    <section className={s.flowers}>
      <div className={s.container}>
        <h2 className={s.title}>Discover your gesture</h2>
        <p className={s.subtitle}>No words. No grand gestures. Just flowers.</p>

        <FlowersList data={flowersData} />

        <NavLink to="/" className={s.link}>
          See All
        </NavLink>
      </div>
    </section>
  );
}
