import Link from "next/link";
import styles from "../../styles/NavBar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About me</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/tools">
            <a>Tools</a>
          </Link>
        </li>
        <li>
          <Link href="/connect">
            <a>Connect</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
