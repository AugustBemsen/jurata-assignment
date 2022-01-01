import Head from "next/head";
import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import Logo from "../components/Logo/Logo";
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
          <Logo className={styles.heroLogo} colored />
        </div>
        <div className={styles.inputField}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon viewBox="0 0 0 0" as={AiOutlineSearch} />
            </InputLeftElement>
            <Input
              type="text"
              size="lg"
              variant="filled"
              placeholder="Search Jurata"
            />
          </InputGroup>
        </div>
      </div>
    </>
  );
}
