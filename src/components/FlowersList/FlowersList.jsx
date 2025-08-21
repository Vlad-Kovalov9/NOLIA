import s from "./FlowersList.module.css";

export default function FlowersList({ data }) {
  return (
    <ul className={s.list}>
      {data.map((item) => (
        <li key={item.id} className={s.item}>
          <img
            src={item.image}
            alt={`Image ${item.name}`}
            className={s.image}
          />
          <div className={s.textBlock}>
            <h3 className={s.name}>{item.name}</h3>
            <span className={s.price}>{item.price}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
