import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    // baseUrl: 'http://localhost:4000/api/user/',
    baseUrl: 'https://bookish-8j43.onrender.com/api/user/',

    prepareHeaders: (headers) => {
        const token = localStorage.getItem('userrToken');

        if(token) {
            headers.set('authorization' , `Bearer ${token}`);
        }
        return headers;
    }
})

export const userApiSlice = createApi({

    reducerPath: 'userApi',
    baseQuery,

    endpoints : (builder) => ({

        registerUser: builder.mutation({
            query : (userData) => ({
                url: 'signup',
                method: 'POST',
                body: userData
            })
        }),

        loginUser: builder.mutation({
            query: (userData) => ({
                url: 'login',
                method: 'POST',
                body: userData
            })
        }),

        booksForUsers: builder.query({
            query: () => ({
                url : 'books',
                method: 'GET',
            }),
        })
    })

})


export const { useRegisterUserMutation , useLoginUserMutation , useBooksForUsersQuery } = userApiSlice;