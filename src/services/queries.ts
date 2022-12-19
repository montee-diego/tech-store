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

// export const GET_CATEGORY = gql`
//   ${PRODUCT_CARD}
//   query GetCategory($slug: String = "") {
//     category(where: { slug: $slug }) {
//       id
//       name
//       brands
//       products(first: 10) {
//         ...ProductCard
//       }
//       slug
//     }
//     productsConnection(where: { category: { slug: $slug } }) {
//       aggregate {
//         count
//       }
//     }
//   }
// `

// export const GetCategory = gql`
//   ${PRODUCT_CARD}
//   query GetCategory(
//     $slug: String = ""
//     $minPrice: Float = 0
//     $maxPrice: Float = 500000
//     $quantity: Int = 0
//     $isSale: Boolean = false
//     $orderBy: ProductOrderByInput
//     $skip: Int = 0
//   ) {
//     category(where: { slug: $slug }) {
//       id
//       name
//       brands
//       products(
//         where: {
//           AND: [
//             { quantity_gte: $quantity }
//             { OR: [{ isOnSale: $isSale }, { isOnSale_not: false }] }
//             { price_gte: $minPrice, price_lte: $maxPrice }
//           ]
//         }
//         orderBy: $orderBy
//         first: 10
//         skip: $skip
//       ) {
//         ...ProductCard
//       }
//       slug
//     }
//     productsConnection(
//       where: {
//         category: { slug: $slug }
//         AND: [
//           { quantity_gte: $quantity }
//           { OR: [{ isOnSale: $isSale }, { isOnSale_not: false }] }
//           { price_gte: $minPrice, price_lte: $maxPrice }
//         ]
//       }
//     ) {
//       aggregate {
//         count
//       }
//     }
//   }
// `

export const GetCategory = gql`
  ${PRODUCT_CARD}
  query GetCategoryBrand(
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

// export const GET_CATEGORY_FILTERED = gql`
//   ${PRODUCT_CARD}
//   query GetCategoryFiltered(
//     $id: String! = ""
//     $brands: [String!] = []
//     $minPrice: Float = 0
//     $maxPrice: Float = 0
//     $quantity: Int = 0
//     $isSale: Boolean = false
//     $orderBy: ProductOrderByInput
//     $skip: Int = 0
//   ) {
//     products(
//       where: {
//         categoryId: $id
//         brand_in: $brands
//         AND: [
//           { quantity_gte: $quantity }
//           { OR: [{ isOnSale: $isSale }, { isOnSale_not: false }] }
//           { price_gte: $minPrice, price_lte: $maxPrice }
//         ]
//       }
//       orderBy: $orderBy
//       first: 10
//       skip: $skip
//     ) {
//       ...ProductCard
//     }
//     productsConnection(
//       where: {
//         categoryId: $id
//         brand_in: $brands
//         AND: [
//           { quantity_gte: $quantity }
//           { OR: [{ isOnSale: $isSale }, { isOnSale_not: false }] }
//           { price_gte: $minPrice, price_lte: $maxPrice }
//         ]
//       }
//     ) {
//       aggregate {
//         count
//       }
//     }
//   }
// `

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
  ${PRODUCT_CARD}
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

// export const GET_SEARCH = gql`
//   ${PRODUCT_CARD}
//   query GetSearch($query: String = "", $sort: ProductOrderByInput, $skip: Int = 0) {
//     products(where: { _search: $query }, orderBy: $sort, first: 10, skip: $skip) {
//       ...ProductCard
//     }
//     productsConnection(where: { _search: $query }, first: 10, skip: $skip) {
//       aggregate {
//         count
//       }
//     }
//   }
// `
