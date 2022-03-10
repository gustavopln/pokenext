import Image from "next/image";
import styles from "../styles/About.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.about}>
      <h1 className={styles.h1}>Sobre o projeto</h1>
      <p className={styles.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Image src="/images/charizard.png" width="300" height="300" alt="Charizard" />
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </div>

  )
}