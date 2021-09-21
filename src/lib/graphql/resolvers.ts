import { Link, LinkSubmission } from '../../types';
import links from '../sample-data/links';

const resolvers = {
    Query: {
        info: (): string => 'This is my API',
        feed: (): Link[] => links
    },

    Mutation: {
        post: (parent: unknown, args: LinkSubmission): Link => {
            let idCount = links.length;
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url
            };
            links.push(link);
            return link;
        }
    }
};

export default resolvers;
