import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://3.34.136.95:3000/graphql",
  cache: new InMemoryCache(),
});
