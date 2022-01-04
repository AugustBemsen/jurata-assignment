import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { MdLanguage, MdOutlineNavigateNext } from "react-icons/md";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { initializeApollo } from "../../lib/apollo";
import styles from "../../styles/Search.module.css";
import Logo from "../../components/Logo/Logo";
import SearchBox from "../../components/SearchBox/SearchBox";
import GetAnswers from "../../lib/queries/getAnswer";

const Search = () => {
  // get query params
  const router = useRouter();

  const question = router.query.q;

  // get answers
  const { data, loading, error } = useQuery(GetAnswers, {
    variables: { question: question },
  });

  if (loading) return <h1>Loading...</h1>;

  if (error || !data) return <h2>Error</h2>;
  if (data.length === 0) return <h2>404 | Not Found</h2>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.heroLogo} onClick={() => router.push("/")}>
          <Logo />
        </div>
        <SearchBox className={styles.inputField} />
        <div className={styles.languages}>
          {router.locales.map((local, i) => (
            <Link href={router.asPath} locale={local} key={i + local}>
              <a className={local === router.locale ? styles.active : ""}>
                {local}
              </a>
            </Link>
          ))}
        </div>
        <Menu closeOnBlur>
          <MenuButton>
            <MdLanguage className={styles.navIcon} />
          </MenuButton>
          <MenuList>
            {router.locales.map((local, i) => (
              <MenuItem key={i + local}>
                <Link href={router.asPath} locale={local}>
                  <a>{local}</a>
                </Link>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>
      <SearchBox className={styles.mobileSearch} />
      <div className={styles.bread}>
        <Breadcrumb spacing="8px" separator={<MdOutlineNavigateNext />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink>Search</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>{question}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className={styles.result}>
        <div className={styles.result_header}>
          <Image
            src={data?.answer?.image}
            width={220}
            height={220}
            alt="search"
          />
          <p>{question}</p>
        </div>
        <div className={styles.result_body}>
          <p>{data?.answer?.answer}</p>
          <Link href={data?.answer?.url}>
            <a>See More</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Search;

export const getServerSideProps = async ({ query }) => {
  const question = query.q;
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GetAnswers,
    variables: { question: question },
  });
  return {
    props: { initialApolloState: apolloClient.cache.extract(), question },
  };
  return;
};
