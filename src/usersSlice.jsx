import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk("fetchUsers", async () =>{
    const response = await fetch("https://fakestoreapi.com/users");
    const users = await response.json();
    return users;
});

const usersSlice = createSlice({
    name: "users",
    initialState:{
        entities: [],
    },
    reducers:{
        add(state, action){
            state.entities.push(action.payload);
        }        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled(), (state, action) => {
            state.entities = [...state.entities, ...action.payload];
        } )
    }
});

export const {add} = usersSlice.actions;
export default usersSlice.reducer;