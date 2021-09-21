/*
    working through tutorial here: https://www.howtographql.com/graphql-js/1-getting-started/
*/

import { ApolloServer } from 'apollo-server';

const typeDefs = `
    type Query {
        info: String!
    }
`;

const resolvers = {
    Query: {
        info: () => 'This is my API'
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server
    .listen()
    .then(({ url }) => 
        console.log(`Server is running on ${url}`));
