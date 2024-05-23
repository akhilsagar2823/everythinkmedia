import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teamApi = createApi({
  reducerPath: 'teamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/cms/",
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