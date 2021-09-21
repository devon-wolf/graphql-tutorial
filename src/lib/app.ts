/*
    working through tutorial here: https://www.howtographql.com/graphql-js/1-getting-started/
*/

import { ApolloServer } from 'apollo-server';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const server = new ApolloServer({
    typeDefs,
    resolvers
});

export default server;
