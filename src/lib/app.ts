/*
    working through tutorial here: https://www.howtographql.com/graphql-js/1-getting-started/
*/
import fs from 'fs';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import resolvers from './graphql/resolvers';

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(`${__dirname}/graphql/`, 'schema.graphql'), 'utf8'
    ),
    resolvers
});

export default server;
