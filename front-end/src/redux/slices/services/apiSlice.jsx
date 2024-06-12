import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApiSlice = createApi({

    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4000/api/user/'}),

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
        })
    })

})


export const { useRegisterUserMutation , useLoginUserMutation } = userApiSlice;