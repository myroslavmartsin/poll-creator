// src/store/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreatePollPayload, Poll } from '../models/poll.models';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6626a09d052332d553238268.mockapi.io/api'
  }),
  endpoints: (builder) => ({
    getPoll: builder.query<Poll, string>({
      query: (id: string) => `/polls-example/${id}`
    }),
    getPolls: builder.query<Poll[], void>({
      query: () => '/polls-example'
    }),
    createPoll: builder.mutation<Poll, CreatePollPayload>({
      query: (newPoll: CreatePollPayload) => ({
        url: '/polls-example',
        method: 'post',
        body: newPoll
      })
    }),
    deletePoll: builder.mutation<void, string>({
      query: (id: string) => ({
        url: `/polls-example/${id}`,
        method: 'DELETE'
      }),

      onQueryStarted: async (id: string, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;

          dispatch(
            apiSlice.util.updateQueryData('getPolls', undefined, (draft: Poll[]) => {
              return draft.filter((poll: Poll) => poll.id !== id);
            })
          );
        } catch (err) {
          console.error('Error deleting poll:', err);
        }
      }
    })
  })
});

export const { useGetPollQuery, useGetPollsQuery, useCreatePollMutation, useDeletePollMutation } =
  apiSlice;
