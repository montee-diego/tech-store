import {
  ApolloClient,
  InMemoryCache,
  ReactiveVar,
  makeVar,
} from "@apollo/client"

import { ICart } from "@interfaces/interfaces"

export const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cl3vpziqpfoti01xk3lgl274w/master",
  cache: new InMemoryCache(),
})

export const cartStore: ReactiveVar<ICart[]> = makeVar<ICart[]>([])
