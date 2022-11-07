import { gql } from "@apollo/client"

export const PRODUCT_CARD = gql`
  fragment ProductCard on Product {
    brand
    id
    image {
      url
    }
    isOnSale
    listPrice
    price
    quantity
    title
  }
`

export const GET_HOMEPAGE = gql`
  ${PRODUCT_CARD}
  query GetCategories($skip: Int = 0) {
    categories(orderBy: name_ASC) {
      icon {
        url
      }
      id
      image {
        url
      }
      name
    }
    popular: products(where: { isOnSale: false }, first: 6, skip: $skip) {
      ...ProductCard
    }
    deals: products(where: { isOnSale: true }, first: 6, skip: $skip) {
      ...ProductCard
    }
  }
`

export const GET_CATEGORY = gql`
  ${PRODUCT_CARD}
  query GetCategory($id: ID = "", $catId: String! = "") {
    category(where: { id: $id }) {
      id
      name
      brands
      products(first: 10) {
        ...ProductCard
      }
    }
    productsConnection(where: { categoryId: $catId }) {
      aggregate {
        count
      }
    }
  }
`

export const GET_CATEGORY_FILTERED = gql`
  ${PRODUCT_CARD}
  query GetCategoryFiltered(
    $id: String! = ""
    $brands: [String!] = []
    $minPrice: Float = 0
    $maxPrice: Float = 0
    $quantity: Int = 0
    $isSale: Boolean = false
    $orderBy: ProductOrderByInput
    $skip: Int = 0
  ) {
    products(
      where: {
        categoryId: $id
        brand_in: $brands
        AND: [
          { quantity_gte: $quantity }
          { OR: [{ isOnSale: $isSale }, { isOnSale_not: false }] }
          { price_gte: $minPrice, price_lte: $maxPrice }
        ]
      }
      orderBy: $orderBy
      first: 10
      skip: $skip
    ) {
      ...ProductCard
    }
    productsConnection(
      where: {
        categoryId: $id
        brand_in: $brands
        AND: [
          { quantity_gte: $quantity }
          { OR: [{ isOnSale: $isSale }, { isOnSale_not: false }] }
          { price_gte: $minPrice, price_lte: $maxPrice }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
  }
`

export const GET_PRODUCT_BY_ID = gql`
  ${PRODUCT_CARD}
  query GetProductByID($id: ID = "") {
    product(where: { id: $id }) {
      about {
        html
      }
      brand
      category {
        ... on Category {
          id
          name
          products(where: { NOT: { id: $id } }, first: 4) {
            ...ProductCard
          }
        }
      }
      description
      id
      image {
        url
      }
      isOnSale
      listPrice
      price
      quantity
      sellers {
        id
        isOfficial
        name
      }
      title
    }
  }
`

export const GET_SEARCH = gql`
  ${PRODUCT_CARD}
  query GetSearch(
    $query: String = ""
    $orderBy: ProductOrderByInput
    $skip: Int = 0
  ) {
    products(
      where: { _search: $query }
      orderBy: $orderBy
      first: 10
      skip: $skip
    ) {
      ...ProductCard
    }
    productsConnection(where: { _search: $query }, first: 10, skip: $skip) {
      aggregate {
        count
      }
    }
  }
`
