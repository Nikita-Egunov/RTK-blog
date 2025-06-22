import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface TypePost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<TypePost[], void>({
      query: () => 'posts'
    })
  })
})

export const { useGetPostsQuery } = api
