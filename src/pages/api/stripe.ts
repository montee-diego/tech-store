import type { NextApiRequest, NextApiResponse } from "next"
import Stripe from "stripe"

import { ICart } from "@interfaces/interfaces"

// @ts-ignore
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [],
        line_items: req.body.map((item: ICart) => {
          const { product } = item

          return {
            price_data: {
              currency: "EUR",
              product_data: {
                name: product.title,
                images: [product.image.url],
              },
              unit_amount: product.price * 100,
            },
            adjustable_quantity: {
              enabled: false,
            },
            quantity: item.quantity,
          }
        }),
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      })

      res.status(200).json(session)
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    res.setHeader("Allow", "POST")
    res.status(405).end("Method Not Allowed")
  }
}
