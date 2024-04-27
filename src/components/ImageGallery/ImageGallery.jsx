import ImageCard from "../ImageCard/ImageCard";

import css from "./ImageGallery.module.css";

export default function ImageGallery({ articles, handleModalToggle }) {
  return (
    <div>
      <ul className={css.gallery}>
        <ImageCard articles={articles} handleModalToggle={handleModalToggle} />
      </ul>
    </div>
  );
}
