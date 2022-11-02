export interface IProducts {
  brand: string
  id: string
  image: {
    url: string
  }
  isOnSale: boolean
  listPrice: number
  price: number
  quantity: number
  title: string
}

export interface ISeller {
  id: string
  isOfficial: boolean
  name: string
}

export interface IProductInCart {
  id: string
  image: {
    url: string
  }
  price: number
  quantity: number
  title: string
}

export interface ICart {
  product: IProductInCart
  quantity: number
}
