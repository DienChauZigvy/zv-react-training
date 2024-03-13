import Category from "../../components/Category";
import Header from "../../components/Header";
import LocationList from "../../components/LocationList/LocationList";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <Category />
      <LocationList />
    </div>
  );
}
