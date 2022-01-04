import Head from "next/head";

import Logo from "../components/Logo/Logo";
import SearchBox from "../components/SearchBox/SearchBox";
import styles from "../styles/Home.module.css";

export default function Home() {

  return (
    <>
      <Head>
        <title>Jurata</title>
        <meta name="description" content="Jurata Assignment" />
      </Head>
      <div className={styles.hero}>
        <div className={styles.heroLogo}>
          <Logo colored />
        </div>
        <SearchBox className={styles.inputField} />
      </div>
    </>
  );
}
