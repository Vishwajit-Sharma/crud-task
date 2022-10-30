import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    return users
})

const userSlice = createSlice({
    name: "users",
    initialState: {
        items: [],
        loading: false,
    },
    reducers: {
        userAdd: (state, action) =>{
            state.items.push(action.payload)
            
        },
        userUpdate: (state, action) =>{
            const {id, name, username, email, city, company} = action.payload
            const existingUser = state.items.find(user=>user.id===id)
            if(existingUser){
                existingUser.name = name
                existingUser.username = username
                existingUser.email = email
                existingUser.city = city
                existingUser.company.name = company
            }
        },
        userDelete: (state, action) =>{
            const {id} = action.payload
            const existingUser = state.items.find(user=>user.id===id)
            if(existingUser){
                state.items = state.items.filter(user => user.id!==id)
            }
        },
    },

    extraReducers: {
        [fetchUsers.pending]: (state, action) =>{
            state.loading = true
        },

        [fetchUsers.fulfilled]: (state, action) =>{
            state.loading = false
            state.items = [...state.items, ...action.payload]
        },

        [fetchUsers.rejected]: (state, action) =>{
            state.loading = false
        },
    }
})

export const {userAdd, userUpdate, userDelete} = userSlice.actions

export default userSlice.reducer