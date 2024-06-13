import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApiSlice = createApi({

    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4000/api/'}),

    endpoints : (builder) => ({

        registerUser: builder.mutation({
            query : (userData) => ({
                url: 'user/signup',
                method: 'POST',
                body: userData
            })
        }),

        loginUser: builder.mutation({
            query: (userData) => ({
                url: 'user/login',
                method: 'POST',
                body: userData
            })
        }),

        adminLogin: builder.mutation({
            query: (data) => ({
                url: 'admin/login',
                method: 'POST',
                body: data
            })
        }),
    })

})


export const { useRegisterUserMutation , useLoginUserMutation , useAdminLoginMutation} = userApiSlice;