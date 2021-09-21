/*
    working through tutorial here: https://www.howtographql.com/graphql-js/1-getting-started/
*/

import server from './lib/app';

server
    .listen()
    .then(({ url }) => 
        console.log(`Server is running on ${url}`));
