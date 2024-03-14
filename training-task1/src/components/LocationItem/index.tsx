import { IoMdStarOutline } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { LocationItemProps } from "../../types";
import styles from "./LocationItem.module.scss";

import ImageSlider from "./ImageSlider";

export default function LocationItem({
  isFavorite,
  images,
  title,
  description,
  rates,
  price,
}: LocationItemProps) {
  return (
    <div className={styles.locationItemContainer}>
      <ImageSlider data={images} isFavorite={isFavorite} />

      <div className={`${styles.description} ${styles.truncate}`}>
        <div className={`${styles.title} ${styles.truncate}`}>
          <span>{title}</span>
          <p>
            <IoMdStarOutline />
            {rates}
          </p>
        </div>
        <div>{description}</div>
        <div>5 nights . March 14 - 19</div>
        <div className={styles.price}>
          <span>${price}</span> before taxes
        </div>
      </div>
    </div>
  );
}
