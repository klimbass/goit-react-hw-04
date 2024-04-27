import css from "./ImageCard.module.css";

export default function ImageCard({ articles, handleModalToggle }) {
  return articles.map((item) => {
    return (
      <li key={item.id} className={css.imageItem}>
        <div
          onClick={() => {
            handleModalToggle(
              item.urls.regular,
              item.likes,
              item.alt_description,
              item.user
            );
          }}
        >
          <img
            className={css.image}
            src={item.urls.small}
            alt={item.alt_description}
            width="315"
            height="200"
          />
        </div>
      </li>
    );
  });
}
