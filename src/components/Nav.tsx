import { useState, useRef, ChangeEvent, SyntheticEvent } from "react"
import { useRouter } from "next/router"
import { useReactiveVar } from "@apollo/client"

import { cartStore } from "@services/apollo-client"
import { ICart } from "@interfaces/interfaces"

import Link from "next/link"
import Style from "@styles/components/Nav.module.css"

const Nav = () => {
  const [input, setInput] = useState<string>("")
  const router = useRouter()
  const inputEl = useRef<HTMLInputElement | null>(null)
  const cart: ICart[] = useReactiveVar(cartStore)

  function handleInput(event: ChangeEvent<HTMLInputElement>): void {
    setInput(event.target.value)
  }

  function handleSubmit(event: SyntheticEvent): void {
    event.preventDefault()
    router.push(`/search?query=${input}`)
    inputEl?.current?.blur()
  }

  return (
    <nav>
      <div className={Style.navbar}>
        <Link href="/">
          <a id={Style.logo}>Tech Store</a>
        </Link>
        <form className={Style.search} onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={handleInput}
            ref={inputEl}
          />
          <button type="submit" className={Style.button} title="Search">
            <img src="/img/icon-search.svg" alt="Search" />
          </button>
        </form>
        <Link href="/cart">
          <a className={Style.cart}>
            <img src="/img/cart-shopping-solid.svg" alt="Cart" />
            <span>{cart.length}</span>
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
