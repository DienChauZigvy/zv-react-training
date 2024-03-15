import Category from "../../components/Category";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LocationList from "../../components/LocationList/LocationList";
import { ToastTypes, useToast } from "../../components/Toast/ToastContext";
import styles from "./Home.module.scss";

export default function Home() {
  const toast = useToast();
  return (
    <div className={styles.homeContainer}>
      <Header />
      <div className={styles.sticky}>
        <Category />
      </div>
      <button
        onClick={() => {
          toast?.open("This is a toast message!");
        }}
      >
        Toast message
      </button>

      <button
        onClick={() => {
          toast?.showToast("This is warning toast", ToastTypes.WARNING);
        }}
      >
        Toast warning
      </button>
      <button
        onClick={() => {
          toast?.success("This is success toast");
        }}
      >
        Toast success
      </button>
      <button
        onClick={() => {
          toast?.info("This is info toast");
        }}
      >
        Toast info
      </button>
      <button
        onClick={() => {
          toast?.warning("This is warning toast");
        }}
      >
        Toast warning
      </button>
      <button
        onClick={() => {
          toast?.error("This is error toast");
        }}
      >
        Toast error
      </button>
      <LocationList />
      <Footer />
    </div>
  );
}
