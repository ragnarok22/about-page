import Link from "next/link";
import styles from "../../styles/Index.module.scss";

export default function HomeHeader() {
  return (
    <header className={`${styles.header} flex justify-between items-center`}>
      <div className="text-center">
        <h1 className="text-xl">Reinier Hernández</h1>
        <h2 className="text-lg text-green-400">Software Engineer</h2>
      </div>
      <Link href="/about">
        <a className="about">About me</a>
      </Link>
    </header>
  );
}
