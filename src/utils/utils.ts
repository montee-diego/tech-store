import { ICart } from "@interfaces/interfaces"

export const displayPrice = (price: number): string => {
  return Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "EUR",
  }).format(price)
}

export const displayDiscount = (price: number, priceOnSale: number): number => {
  return Math.round(Math.abs((priceOnSale - price) / price) * 100)
}

export const getRandomNumber = (min: number, max: number): number => {
  return Math.round(Math.random() * (max - min) + min)
}

export const addToCart = (product: ICart): void => {
  let cart: ICart[] = JSON.parse(localStorage.getItem("cart") || "[]")
  let indexInCart: number = cart.findIndex((item) => item.product.id === product.product.id)

  if (indexInCart !== -1) {
    cart[indexInCart].quantity += product.quantity
  } else {
    cart = [...cart, product]
  }

  localStorage.setItem("cart", JSON.stringify(cart))
}

export const removeFromCart = (id: string): void => {
  let cart: ICart[] = JSON.parse(localStorage.getItem("cart") || "[]")
  let updatedCart = cart.filter((item) => item.product.id !== id)

  localStorage.setItem("cart", JSON.stringify(updatedCart))
}

export const updateCart = (id: string, quantity: number): void => {
  let cart: ICart[] = JSON.parse(localStorage.getItem("cart") || "[]")
  let indexInCart: number = cart.findIndex((item) => item.product.id === id)

  if (indexInCart !== -1) {
    cart[indexInCart].quantity = quantity
  } else {
    return
  }

  localStorage.setItem("cart", JSON.stringify(cart))
}

export const clearCart = () => {
  localStorage.removeItem("cart")
}
