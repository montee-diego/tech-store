import { gql } from "@apollo/client"

const ProductCardFragment = gql`
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

export const GetHomePage = gql`
  ${ProductCardFragment}
  query GetHomePage($skip: Int = 0) {
    categories(orderBy: name_ASC) {
      icon {
        url
      }
      id
      image {
        url
      }
      name
      slug
    }
    popular: products(where: { isOnSale: false }, first: 6, skip: $skip) {
      ...ProductCard
    }
    deals: products(where: { isOnSale: true }, first: 6, skip: $skip) {
      ...ProductCard
    }
  }
`

export const GetCategory = gql`
  ${ProductCardFragment}
  query GetCategory(
    $slug: String = ""
    $brand: String = ""
    $min: Float = 0
    $max: Float = 500000
    $quantity: Int = 0
    $sale: Boolean = false
    $sort: ProductOrderByInput = title_ASC
    $skip: Int = 0
  ) {
    category(where: { slug: $slug }) {
      id
      name
      brands
      products(
        where: {
          brand_starts_with: $brand
          AND: [
            { quantity_gte: $quantity }
            { OR: [{ isOnSale: $sale }, { isOnSale_not: false }] }
            { price_gte: $min, price_lte: $max }
          ]
        }
        orderBy: $sort
        first: 10
        skip: $skip
      ) {
        ...ProductCard
      }
      slug
    }
    productsConnection(
      where: {
        category: { slug: $slug }
        brand_starts_with: $brand
        AND: [
          { quantity_gte: $quantity }
          { OR: [{ isOnSale: $sale }, { isOnSale_not: false }] }
          { price_gte: $min, price_lte: $max }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
  }
`

export const GetProductByID = gql`
  ${ProductCardFragment}
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
          slug
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

export const GetSearch = gql`
  ${ProductCardFragment}
  query GetSearch(
    $query: String = ""
    $min: Float = 0
    $max: Float = 500000
    $quantity: Int = 0
    $sale: Boolean = false
    $sort: ProductOrderByInput = title_ASC
    $skip: Int = 0
  ) {
    products(
      where: {
        _search: $query
        AND: [
          { quantity_gte: $quantity }
          { OR: [{ isOnSale: $sale }, { isOnSale_not: false }] }
          { price_gte: $min, price_lte: $max }
        ]
      }
      orderBy: $sort
      first: 10
      skip: $skip
    ) {
      ...ProductCard
    }
    productsConnection(
      where: {
        _search: $query
        AND: [
          { quantity_gte: $quantity }
          { OR: [{ isOnSale: $sale }, { isOnSale_not: false }] }
          { price_gte: $min, price_lte: $max }
        ]
      }
      first: 10
      skip: $skip
    ) {
      aggregate {
        count
      }
    }
  }
`
