import { configureStore } from "@reduxjs/toolkit";
import {userApiSlice} from './slices/services/apiSlice';

export const store  = configureStore ({

    reducer : {
        [userApiSlice.reducerPath] : userApiSlice.reducer,
    },

    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(userApiSlice.middleware)
});
