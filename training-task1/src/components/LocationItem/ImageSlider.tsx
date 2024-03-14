import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styles from "./LocationItem.module.scss";
import { IoMdHeartEmpty } from "react-icons/io";
// import { AiTwotoneHeart } from "react-icons/ai";

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
        className={`${styles.arrow} ${styles.arrowLeft} ${slide !== 0 ? styles.hidden : null}`}
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
      <MdKeyboardArrowRight
        onClick={nextSlide}
        className={`${styles.arrow} ${styles.arrowRight}`}
      />
      <div className={styles.indicators}>
        {data.map((_, idx) => {
          return (
            <div
              key={idx}
              className={`${styles.indicator} ${slide === idx ? styles.indicator : styles.indicatorInactive}`}
              onClick={() => setSlide(idx)}
            ></div>
          );
        })}
      </div>
      <div className={styles.favorite}>
        {data.map((_, idx) => {
          return (
            <div
              key={idx}
              className={`${styles.heartIcon} ${slide === idx ? styles.heartIcon : styles.indicatorInactive}`}
              onClick={() => setSlide(idx)}
            >
              {slide === idx ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  // ariaHidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    fill: "rgba(0, 0, 0, 0.5)",
                    height: "24px",
                    width: "24px",
                    stroke: "#fff",
                    strokeWidth: 2,
                    overflow: "visible",
                  }}
                >
                  <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
                </svg>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
