import { ApolloClient, InMemoryCache } from "@apollo/client";
export const graphQLClient = new ApolloClient({
 uri: "/graphql",
 cache: new InMemoryCache(),
});