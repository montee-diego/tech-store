import type { Stripe } from "@stripe/stripe-js"
import { loadStripe } from "@stripe/stripe-js"

let stripePromise: Stripe

const getStripe = async () => {
  if (!stripePromise) {
    // @ts-ignore
    stripePromise = new loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  }

  return stripePromise
}

export default getStripe
