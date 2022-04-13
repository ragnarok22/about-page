import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Index.module.scss";
import draw200x200Image from "../../assets/images/draw200x200.png";
import circuit from "../../assets/images/home/circuit-hero.svg";

export default function HomeIndex() {
  return (
    <main className={`${styles.home}`}>
      <div className="relative flex justify-center">
        <Image
          src={draw200x200Image}
          alt="RagnarokReinier"
          className={styles.image}
        />
        <div className={styles.circuit}></div>
        <Link href="/projects">
          <a className="btn-hover-state absolute left-7 top-3">Projects</a>
        </Link>

        <Link href="/tools">
          <a className="btn-hover-state absolute right-10 top-44">Tools</a>
        </Link>
        <Link href="/connect">
          <a className="btn-hover-state absolute top-52">Connect</a>
        </Link>
      </div>
    </main>
  );
}
