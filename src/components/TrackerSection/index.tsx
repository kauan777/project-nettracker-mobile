import Link from "next/link";
import styles from "./styles.module.scss";

function TrackerSection() {
  return (
    <Link href="/rastreador">
      <div className={styles.container}>
        <h2>CONHEÇA O FUTURO</h2>
      </div>
    </Link>
  );
}

export default TrackerSection;
