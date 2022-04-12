import Link from "next/link";
import styles from "../../styles/Index.module.scss";

export default function HomeHeader() {
  return (
    <header className={`${styles.header} flex justify-between items-center py-9 px-1`}>
      <div className="text-center ml-5">
        <h1 className="">Reinier Hernández</h1>
        <h2 className="">Software Engineer</h2>
      </div>
      <Link href="/about">
        <a className="about">About me</a>
      </Link>
    </header>
  );
}
