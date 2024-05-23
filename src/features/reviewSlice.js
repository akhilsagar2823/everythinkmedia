import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/cms/",
  }),
  endpoints: (builder) => ({
    getReview: builder.query({
      query: () => "review",
    }),
    addReview: builder.mutation({
        query: (newReview) => ({
          url: "review",
          method: "POST",
          body: newReview,
        }),
      }),
  }),
});

export const { useGetReviewQuery, useAddReviewMutation } = reviewApi;

// export const { useGetreviewQuery } = reviewApi;
// export const { useGetreviewQuery } = reviewApi;