import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4rwm3xh1pv501ywbfx35r1i/master",
  cache: new InMemoryCache(),
});
