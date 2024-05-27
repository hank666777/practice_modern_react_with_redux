import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

// DEV ONLY!!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
    fetchFn: async (...args) => {
      // remove for production
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(build) {
    return {
      addAlbum: build.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: 'UsersAlbums', id: user.id}];
        },
        query: (user) => {
          return {
            url: 'albums',
            method: 'POST',
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            }
          }
        }
      }),
      fetchAlbums: build.query({
        providesTags: (result, error, user) => {
          const tags = result.map(album => {
            return { type: 'Album', id: album.id };
          });
          tags.push({ type: 'UsersAlbums', id: user.id });
          return tags;
        },
        query: (user) => {
          return {
            url: '/albums',
            method: 'GET',
            params: {
              userId: user.id,
            },
          }
        }
      }),
      removeAlbum: build.mutation({
        invalidatesTags: (result, error, album) => {
          return [{type: 'Album', id: album.id}];
        },
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: 'DELETE',
          }
        }
      }),
    }
  }
})
// endpoints 必須對應 use + "addAlbum" + mutation
export const {
  useAddAlbumMutation,
  useFetchAlbumsQuery,
  useRemoveAlbumMutation
} = albumsApi;
export { albumsApi };