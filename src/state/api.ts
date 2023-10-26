import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { KpiResponse, ProductResponse, TransactionResponse } from "./types";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  reducerPath: "main",
  tagTypes: ["kpis", "Products", "Transaction"],
  endpoints: (builder) => ({
    getKpis: builder.query<KpiResponse[], void>({
      query: () => `/api/kpi`,
      providesTags: ["kpis"],
    }),
    getProducts: builder.query<ProductResponse[], void>({
      query: () => `/api/product`,
      providesTags: ["Products"],
    }),
    getTransaction: builder.query<TransactionResponse[], void>({
      query: () => `/api/transaction`,
      providesTags: ["Transaction"],
    }),
  }),
});

export default api;
export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionQuery } =
  api;
