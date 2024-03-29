import Footer from "../../components/Footer";
import LocationList from "../../components/LocationList/LocationList";
import { useToast } from "../../components/Toast/ToastContext";
import styles from "./Home.module.scss";
import Category from "./components/Category";
import Header from "./components/Header";

export default function Home() {
  const toast = useToast();

  // const books = useMutation({
  //   mutationFn: () => {
  //     return axiosClient.post("http://localhost:3000/books", {
  //       title: "Book 7",
  //       description: "Book 1 Description",
  //       author: "Author 1",
  //       price: 1000,
  //       category: "Adventure",
  //     });
  //   },
  //   mutationKey: ["createBook"],
  // });

  return (
    <div className={styles.homeContainer}>
      <Header />
      <div className={styles.sticky}>
        <Category />
      </div>

      {/* <button
        style={{ padding: "10px", backgroundColor: "green", margin: "80px" }}
        onClick={() => refreshToken()}
      >
        Refresh Token
      </button>
      <button
        style={{ padding: "10px", backgroundColor: "green", margin: "80px" }}
        onClick={() => {
          books.mutate();
        }}
      >
        Create book
      </button>
      <button
        style={{ padding: "10px", backgroundColor: "green", margin: "80px" }}
        onClick={handleLogout}
      >
        Logout
      </button> */}

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
