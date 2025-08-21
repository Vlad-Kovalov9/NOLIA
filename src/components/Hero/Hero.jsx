import s from "./Hero.module.css";
import image from "/images/hero.jpg";

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.container}>
        <img src={image} alt="Hero Image" className={s.image} />
        <p className={s.subtitle}>
          At Nolia, we create more than just bouquets — we deliver feelings. We
          believe that flowers can say what words sometimes cannot. Every
          arrangement is crafted with care, softness, and meaning.
        </p>
      </div>
    </section>
  );
}
