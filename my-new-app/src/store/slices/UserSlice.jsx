import { createSlice } from '@reduxjs/toolkit'


const UserSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {

        addUser(state, action) {
            state.push(action.payload);   //micro minin reducers
        },

        removeUsers(state, action) { },
        deleteUsers(state, action) { }
    },

});

export default UserSlice.reducer;
export const { addUser } = UserSlice.actions; 
