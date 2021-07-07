import { createClient } from '@urql/preact';

export const client = createClient({
  url: 'http://localhost:3000/graphql',
});
