import Image from "next/image";
import footerImg from "../assets/images/home/circuit-nav.svg";
import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src={footerImg} alt="circuit" />
    </footer>
  );
}
