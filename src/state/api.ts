import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  reducerPath: "main",
  tagTypes: ["kpis"],
  endpoints: (builder) => ({
    getKpis: builder.query<void, void>({
      query: () => `/kpi/kpis`,
      providesTags: ["kpis"],
    }),
  }),
});

export default api;
export const { useGetKpisQuery } = api;
