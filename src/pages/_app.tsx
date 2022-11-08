import "@styles/globals.css"
import type { AppProps } from "next/app"
import { useEffect, useState } from "react"
import { ApolloProvider } from "@apollo/client"

import { client, cartStore } from "@services/apollo-client"
import { Disclaimer, Footer, Navbar } from "@components/index"

function MyApp({ Component, pageProps }: AppProps) {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(true)

  useEffect(() => {
    cartStore(JSON.parse(localStorage.getItem("cart") || "[]"))
  }, [])

  return (
    <ApolloProvider client={client}>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      {isPopupOpen && <Disclaimer setIsPopupOpen={setIsPopupOpen} />}
    </ApolloProvider>
  )
}

export default MyApp
