import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"users",
    initialState:{
        users:[],
        loggedIn:false,
    },

    reducers:{
        addUser:(state, action)=>{
           state.users.push(action.payload)
        },
    userLoggedIn:(state, action)=>{
        state.loggedIn=true
    },

        getUser:(state, action)=>{
         state.users = action.payload.map(user=>{
            return {id:user._id,username:user.username,email:user.email,isAdmin:user.isAdmin}
        })
        },
        
       
        updateUser:(state, action)=>{
            const index = state.users.findIndex(user=>user._id==action.payload.id)
            state.users[index]={
                id:user._id,username:user.username,email:user.email, isAdmin:user.isAdmin
            }
        },
        deleteUser:(state, action)=>{
            state.users.filter(user=>user._id!==action.payload.id)
        }
    }
})

export const {addUser, getUser,updateUser, deleteUser,userLoggedIn}=userSlice.actions
export default userSlice.reducer