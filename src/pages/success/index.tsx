import type { NextPage } from "next"
import type { ParsedUrlQuery } from "querystring"
import { useRouter } from "next/router"
import { useEffect, useCallback, useState } from "react"

import { cartStore } from "@services/apollo-client"
import { displayPrice, clearCart } from "@utils/utils"
import { ButtonLink, Loading } from "@components/index"

import Head from "next/head"
import Style from "./index.module.css"

interface IStripeItem {
  title: string
  unit_price: number
  total: number
  quantity: number
}

interface IStripeSessionData {
  total: number
  items: IStripeItem[]
}

const Success: NextPage = () => {
  const route = useRouter()
  const [products, setProducts] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  const fetchSession = useCallback(async (query: ParsedUrlQuery) => {
    const response: Response = await fetch("/api/stripe-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    })

    if (response.status != 200) {
      setIsLoading(false)
      setIsError(true)
      return
    }

    const data = await response.json()
    console.log(data)
    const products: IStripeSessionData = {
      total: data.amount_total / 100,
      items: data.line_items.data.map((item: any) => {
        return {
          title: item.description,
          unit_price: item.price.unit_amount / 100,
          total: item.amount_total / 100,
          quantity: item.quantity,
        }
      }),
    }

    setProducts(products)
    setIsLoading(false)
  }, [])

  const refetchSession = () => {
    setIsError(false)
    setIsLoading(true)
    fetchSession(route.query)
  }

  useEffect(() => {
    if (route.query.session_id) {
      fetchSession(route.query)
    }
  }, [route.query])

  useEffect(() => {
    if (!isError && !isLoading) {
      cartStore([])
      clearCart()
    }
  }, [isError, isLoading])

  return (
    <>
      <Head>
        <title>Tech Store | Thanks! </title>
      </Head>

      <section>
        <h1>Thank you for your purchase!</h1>
        <p>
          We have added a summary of your purchase below, you will also receive a copy by e-mail.
        </p>
      </section>

      <section className={Style.products}>
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <div className={Style.error}>
            <p>Error while retrieving purchase data.</p>
            <button className={Style.refresh} onClick={refetchSession}>
              Refresh
            </button>
          </div>
        ) : (
          <>
            {products.items.map((item: any) => (
              <div className={Style.item}>
                <div className={Style.info}>
                  <p>{item.title}</p>

                  <div className={Style.desc}>
                    <h3 className={Style.quantity}>
                      {item.quantity}x {displayPrice(item.unit_price)}
                    </h3>

                    <h3 className={Style.subtotal}>{displayPrice(item.total)}</h3>
                  </div>
                </div>
              </div>
            ))}

            <div className={Style.total}>
              <h3>Total: {displayPrice(products.total)}</h3>
            </div>
          </>
        )}
      </section>

      <section className={Style.link}>
        <ButtonLink>Home</ButtonLink>
      </section>
    </>
  )
}

export default Success
