import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),  // Your API base URL
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (loginData) => ({
        url: '/user/login',
        method: 'POST',
        body: loginData,  // { email, password }
      }),
    }),
  }),
});

export const { useLoginUserMutation } = apiSlice;
