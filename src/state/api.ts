import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { KpiResponse } from "./types";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  reducerPath: "main",
  tagTypes: ["kpis"],
  endpoints: (builder) => ({
    getKpis: builder.query<KpiResponse[], void>({
      query: () => `/api/kpi`,
      providesTags: ["kpis"],
    }),
  }),
});

export default api;
export const { useGetKpisQuery } = api;
