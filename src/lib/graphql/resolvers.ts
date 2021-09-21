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
};

export default resolvers;
