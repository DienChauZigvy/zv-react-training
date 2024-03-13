import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styles from "./LocationItem.module.scss";
// import { IoMdHeartEmpty } from "react-icons/io";

interface imagesSlidesProps {
  data: string[];
  isFavorite?: boolean;
}

const ImageSlider = ({ data }: imagesSlidesProps) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className={styles.carousel}>
      <MdKeyboardArrowLeft
        onClick={prevSlide}
        className={`${styles.arrow} ${styles.arrowLeft}`}
      />
      {data.map((item, idx) => {
        return (
          <img
            src={item}
            alt={item}
            key={idx}
            className={`${styles.slide} ${slide === idx ? styles.slide : styles.slideHidden}`}
          />
        );
      })}
      {/* <div className={styles.heartIcon}>
        <IoMdHeartEmpty />
      </div> */}
      <MdKeyboardArrowRight
        onClick={nextSlide}
        className={`${styles.arrow} ${styles.arrowRight}`}
      />
      <div className={styles.indicators}>
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={`${styles.indicator} ${slide === idx ? styles.indicator : styles.indicatorInactive}`}
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
