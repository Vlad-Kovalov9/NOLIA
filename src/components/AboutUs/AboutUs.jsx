import s from "./AboutUs.module.css";
import image from "/images/about.jpg";

export default function AboutUs() {
  return (
    <section className={s.about}>
      <div className={s.container}>
        <img src={image} alt="Image" className={s.image} />
        <div className={s.text}>
          <h1 className={s.title}>About us</h1>

          <div className={s.textBlock}>
            <p className={s.description}>
              NOLIA is a flower studio where minimalism meets meaning. We craft
              elegant arrangements that speak through silence — delicate in
              form, rich in feeling. Each bouquet is a thoughtful composition,
              designed to reflect presence, care, and beauty in its purest form.
            </p>

            <p className={s.description}>
              At Nolia, we believe that flowers hold more than color — they
              carry mood, memory, and emotion. We choose every stem with
              intention, blending texture and tone into quiet poetry.
            </p>

            <p className={s.description}>
              Our style is simple, but never empty. Subtle, but deeply
              expressive. Discover the beauty of stillness, told in flowers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
