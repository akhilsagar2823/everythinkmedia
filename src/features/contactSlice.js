import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/cms/",
  }),
  endpoints: (builder) => ({
    getContact: builder.query({
      query: () => "contact",
    }),
    addContact: builder.mutation({
        query: (newContact) => ({
          url: "contact",
          method: "POST",
          body: newContact,
        }),
      }),
  }),
});

export const { useGetContactQuery, useAddContactMutation } = contactApi;

// export const { useGetcontactQuery } = contactApi;
// export const { useGetcontactQuery } = contactApi;