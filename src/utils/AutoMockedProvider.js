import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import { addMocksToSchema} from "graphql-tools";
import { loadSchema } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

const AutoMockedProvider =  (
  async (children, mockResolvers) => {

    const schemaGitHub = await loadSchema('./src/schema.docs.graphql', {
      loaders: [
          new GraphQLFileLoader()
      ]
    });

    addMocksToSchema({schemaGitHub, mocks: mockResolvers});

    const client = new ApolloClient({
      link: new SchemaLink({ schemaGitHub }),
      cache: new InMemoryCache()
    });
    console.log("client: ", client);
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
  }
);

export default AutoMockedProvider;