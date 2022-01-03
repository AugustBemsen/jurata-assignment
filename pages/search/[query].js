import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import styles from "../../styles/Search.module.css";
import Logo from "../../components/Logo/Logo";
import SearchBox from "../../components/SearchBox/SearchBox";
import { AiOutlineMenu } from "react-icons/ai";

const Query = () => {
  // state to manage active language
  const [activeLang, setActiveLang] = useState(1);

  //   handle Active Language

  const activeLangHandler = () => {
    activeLang === 1 ? setActiveLang(2) : setActiveLang(1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.heroLogo}>
          <Logo />
        </div>
        <SearchBox className={styles.inputField} />
        <div className={styles.languages}>
          <p
            className={activeLang === 1 ? styles.active : ""}
            onClick={activeLangHandler}
          >
            En
          </p>
          <p
            className={activeLang !== 1 ? styles.active : ""}
            onClick={activeLangHandler}
          >
            Gh
          </p>
        </div>
        <AiOutlineMenu className={styles.navIcon} />
      </div>
      <div className={styles.bread}>
        <Breadcrumb spacing="8px" separator={<MdOutlineNavigateNext />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink>Search</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className={styles.result}>
        <div className={styles.result_header}>
          <Image
            src="https://duckduckgo.com/i/dd4dbdb6.png"
            width={100}
            height={30}
            alt="search"
          />
          <p>Hello world</p>
        </div>
        <div className={styles.result_body}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur perspiciatis porro alias dolorum distinctio excepturi
            repellat rerum, iure animi molestiae consequatur, delectus inventore
            officia. Corporis perspiciatis maxime eaque iure optio?
          </p>
          <Link href="/">
            <a>This is a link</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Query;
