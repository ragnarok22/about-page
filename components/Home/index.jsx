import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Index.module.scss";
import draw200x200Image from "../../assets/images/draw200x200.png";

export default function HomeIndex() {
  return (
    <main className={`${styles.home} flex flex-grow-0`}>
      <Link href="/projects">
        <a className="mt-8 mb-auto ml-3">Projects</a>
      </Link>
      <div className="flex flex-col items-center">
        <Image src={draw200x200Image} alt="RagnarokReinier" className="z-10" />
        <div className={styles.figurita}></div>
        <Link href="/tools">
          <a className="mt-5">Tools</a>
        </Link>
      </div>
      <Link href="/connect">
        <a className="m-auto">Connect</a>
      </Link>
    </main>
  );
}
