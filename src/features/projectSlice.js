import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectApi = createApi({
  reducerPath: 'projectApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/cms/",
  }),
  endpoints: (builder) => ({
    getProject: builder.query({
      query: () => "project",
    }),
  }),
});

export const { useGetProjectQuery } = projectApi;

// export const { useGetprojectQuery } = projectApi;
// export const { useGetprojectQuery } = projectApi;