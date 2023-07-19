import { resolvers, typeDefs } from "./pets/index.js";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//schema definition and set of resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//1. creates an express app
//2. installs apolloserver instance as middleware
//3. prepares app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);
