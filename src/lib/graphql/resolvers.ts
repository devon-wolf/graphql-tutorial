import { Link } from '../../types';
import links from '../sample-data/links';

const resolvers = {
    Query: {
        info: (): string => 'This is my API',
        feed: (): Link[] => links
    },

    Link: {
        id: (parent: Link): string => parent.id,
        description: (parent: Link): string => parent.description,
        url: (parent: Link): string => parent.url
    }

    // parent = result of the previous resolver execution level
    // this 'Link' resolver is not actually needed in this very simple case; it's mostly illustrating the chain of resolvers
};

export default resolvers;
