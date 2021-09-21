/*
    working through tutorial here: https://www.howtographql.com/graphql-js/1-getting-started/
*/

import { ApolloServer } from 'apollo-server';
import schema from './graphql/schema';
import resolvers from './graphql/resolvers';

const server = new ApolloServer({
    typeDefs: schema,
    resolvers
});

export default server;
