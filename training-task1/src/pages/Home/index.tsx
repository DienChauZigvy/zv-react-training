import Category from "../../components/Category";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LocationList from "../../components/LocationList/LocationList";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <div className={styles.sticky}>
        <Category />
      </div>
      <LocationList />
      <Footer />
    </div>
  );
}
