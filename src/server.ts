/*
    working through tutorial here: https://www.howtographql.com/graphql-js/1-getting-started/
*/

import { ApolloServer } from 'apollo-server';
import typeDefs from './lib/graphql/typeDefs';
import resolvers from './lib/graphql/resolvers';

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server
    .listen()
    .then(({ url }) => 
        console.log(`Server is running on ${url}`));
