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
      </div>
      
      <Link href="/projects">
        <a className="mt-8 mb-auto ml-3 absolute">Projects</a>
      </Link>

      <Link href="/tools">
        <a className="mt-5 absolute left-1/2">Tools</a>
      </Link>
      <Link href="/connect">
        <a className="m-auto absolute right-0">Connect</a>
      </Link>
    </main>
  );
}
