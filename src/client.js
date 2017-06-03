import ApolloClient, { createNetworkInterface } from 'apollo-client'

export const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://core-graphql.dev.waldo.photos/',
    dataIdFromObject: record => record.id,  // will be used by Apollo Client caching
  }),
})