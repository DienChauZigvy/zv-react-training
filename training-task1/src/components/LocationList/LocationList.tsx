import LocationItem from "./LocationItem";
import styles from "./LocationList.module.scss";
import { locationsData } from "../../data/index";

export default function LocationList() {
  return (
    <div className={styles.locationListContainer}>
      {locationsData.map((location, index) => (
        <LocationItem
          key={index}
          isFavorite={location.isFavorite}
          images={location.images}
          description={location.description}
          title={location.title}
          price={location.price}
          rates={location.rates}
        />
      ))}
    </div>
  );
}
