import Image from "next/image";
import React from "react";
import styles from "../styles/rastreador.module.scss";

function Rastreador() {
  return (
    <main className={styles.container}>
      <section className={styles.overlay}>
        <div className={styles.backgroundOverlay}>
          <Image
            className={styles.logo}
            width={309}
            height={46.21}
            src="/nettracker.svg"
            alt="Logo Nettracker"
          />
          <div className={styles.imageContainer}>
            <Image
              className={styles.tracker}
              width={300}
              height={400}
              objectFit="contain"
              src="/tracker.webp"
              alt="Imagem do rastreador"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Rastreador;
