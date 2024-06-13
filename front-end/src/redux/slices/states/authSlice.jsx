import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    userInfo: null
}


const authSlice = createSlice({
    name: 'userCred',

    initialState,

    reducers : {
        setUserInfo: (state , action) => {
            state.userInfo = action.payload;
        },

        removeInfo: (state ) => {
            localStorage.removeItem('userrToken');
            state.userInfo = null;
        }
    }
});

export const {setUserInfo , removeInfo} = authSlice.actions;
export default authSlice.reducer;