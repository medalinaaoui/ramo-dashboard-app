import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { KpiResponse, ProductResponse } from "./types";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  reducerPath: "main",
  tagTypes: ["kpis", "Products"],
  endpoints: (builder) => ({
    getKpis: builder.query<KpiResponse[], void>({
      query: () => `/api/kpi`,
      providesTags: ["kpis"],
    }),
    getProducts: builder.query<ProductResponse[], void>({
      query: () => `/api/product`,
      providesTags: ["Products"],
    }),
  }),
});

export default api;
export const { useGetKpisQuery, useGetProductsQuery } = api;
