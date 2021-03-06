import BaseLayout from "../components/layouts/BaseLayout";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import HomeIndex from "../components/Home";

import styles from "../styles/Index.module.scss";

export default function Home() {
  return (
    <BaseLayout className={`${styles.main} flex justify-between`}>
      <Header />
      <HomeIndex />
      <Footer />
    </BaseLayout>
  );
}
