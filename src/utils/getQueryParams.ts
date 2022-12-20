import { EnumOrderBy, IQueryParams } from "@interfaces/interfaces"

export const getQueryParams = (query: any): IQueryParams => {
  return {
    params: {
      min: Number(query.min) || 0,
      max: Number(query.max) || 500000,
      quantity: Number(query.quantity) || 0,
      sale: query.sale === "true",
      sort: Object.values(EnumOrderBy)[Number(query.sort || 0)],
      skip: query.page ? (Number(query.page) - 1) * 10 : 0,
    },
  }
}
