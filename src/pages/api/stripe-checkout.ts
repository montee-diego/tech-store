import type { NextApiRequest, NextApiResponse } from "next"
import Stripe from "stripe"

// @ts-ignore
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.retrieve(req.body.session_id, {
        expand: ["line_items"],
      })

      res.status(200).json(session)
    } catch (err: any) {
      console.log(err)
      res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    res.setHeader("Allow", "POST")
    res.status(405).end("Method Not Allowed")
  }
}
