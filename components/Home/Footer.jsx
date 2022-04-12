import styles from "../../styles/Index.module.scss";

export default function HomeFooter() {
  // change languaje and dark mode

  return (
    <footer className={`${styles.footer} flex justify-end mb-5 mr-5`}>
      <div>
        <button className="m-2">EN</button>
        |
        <button className="m-2">ES</button>
      </div>
    </footer>
  );
}
