import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const createApolloClient = () => {

    return new ApolloClient({
    ssrMode: typeof window === "undefined",

    link: new RestLink({
      uri: "https://api.m3o.com/v1/answer",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
