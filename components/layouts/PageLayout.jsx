import BaseLayout from "./BaseLayout";
import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from "../../styles/PageLayout.module.scss";

export default function PageLayout({ children, className }) {
  return (
    <BaseLayout className={`${className || ""} ${styles.page}`}>
      <Navbar />
      {children}
      <Footer />
    </BaseLayout>
  );
}
