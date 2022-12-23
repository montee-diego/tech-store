import type { ChangeEvent, FunctionComponent, SyntheticEvent } from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/router"
import { useReactiveVar } from "@apollo/client"

import { cartStore } from "@services/apollo-client"
import { ICart } from "@interfaces/interfaces"

import Link from "next/link"
import Style from "./Navbar.module.css"

export const Navbar: FunctionComponent = () => {
  const [input, setInput] = useState<string>("")
  const router = useRouter()
  const inputEl = useRef<HTMLInputElement | null>(null)
  const cart: ICart[] = useReactiveVar(cartStore)

  function handleInput(event: ChangeEvent<HTMLInputElement>): void {
    setInput(event.target.value)
  }

  function handleSubmit(event: SyntheticEvent): void {
    event.preventDefault()

    if (input.length > 0) {
      router.push(`/search?query=${input}`)
      inputEl?.current?.blur()
    }
  }

  return (
    <nav>
      <div className={Style.Container}>
        <Link href="/" passHref>
          <a id={Style.logo}>Tech Store</a>
        </Link>

        <form className={Style.Search} onSubmit={handleSubmit}>
          <input type="text" value={input} onChange={handleInput} ref={inputEl} />
          <button type="submit" title="Search" tabIndex={-1}>
            <img src="/img/icon-search.svg" alt="Search" />
          </button>
        </form>

        <Link href="/cart" passHref>
          <a className={Style.Cart}>
            <img src="/img/cart-shopping-solid.svg" alt="Cart" />
            <span>{cart.length}</span>
          </a>
        </Link>
      </div>
    </nav>
  )
}
