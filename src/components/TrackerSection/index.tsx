import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import ReactLoading from "react-loading";

function TrackerSection() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Link href="/tracker">
      <div className={styles.container}>
        {isLoading ? (
          <h2>
            <ReactLoading
              className={styles.loading}
              type="spinningBubbles"
              width={32}
              height={32}
              color="#1a1a1a"
            />
          </h2>
        ) : (
          <h2 onClick={() => setIsLoading(true)}>CONHEÇA O FUTURO</h2>
        )}
      </div>
    </Link>
  );
}

export default TrackerSection;
