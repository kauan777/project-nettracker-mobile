import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

function TrackerSection() {
  return (
    <Link href="/tracker">
      <div className={styles.container}>
        <h2>CONHEÇA O FUTURO</h2>
      </div>  
    </Link>
  );
}

export default TrackerSection;
