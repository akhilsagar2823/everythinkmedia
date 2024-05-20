import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teamApi = createApi({
  reducerPath: 'teamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/v1/",
  }),
  endpoints: (builder) => ({
    getTeam: builder.query({
      query: () => "team",
    }),
  }),
});

export const { useGetTeamQuery } = teamApi;

// export const { useGetTeamQuery } = teamApi;
// export const { useGetTeamQuery } = teamApi;
