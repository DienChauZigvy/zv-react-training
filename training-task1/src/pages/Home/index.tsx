import Footer from "../../components/Footer";
import { RegistrationForm } from "../../components/FormInput";
import LocationList from "../../components/LocationList/LocationList";
import { useToast } from "../../components/Toast/ToastContext";
import styles from "./Home.module.scss";
import Category from "./components/Category";
import Header from "./components/Header";

export default function Home() {
  const toast = useToast();

  return (
    <div className={styles.homeContainer}>
      <Header />
      <div className={styles.sticky}>
        <Category />
      </div>
      {/* <RegistrationForm /> */}
      {/* <button
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
          toast?.error("This is error toast");
        }}
      >
        Toast error
      </button> */}
      <LocationList />
      <Footer />
    </div>
  );
}
