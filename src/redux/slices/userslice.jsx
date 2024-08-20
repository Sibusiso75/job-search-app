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
        getUser:(state, action)=>{
         state.users = action.payload.map(user=>{
            return {id:user.id,jobTitle:user.jobTitle,phoneNumber:user.phoneNumber,province:user.province,suburb:user.suburb,postalCode:user.postalCode,highestQualification:user.highestQualification,age:user.age,username:user.username, gender:user.gender,email:user.email, isAdmin:user.isAdmin}
        })
        },
        updateuser:(state, action)=>{
            const index = state.users.findIndex(user=>user.id===action.payload.id)
            state.users[index]={
                id:user.id,highestQualification:user.highestQualification,age:user.age,username:user.username, gender:user.gender,email:user.email, isAdmin:user.isAdmin
            }
        },
        deleteuser:(state, action)=>{
            state.users.filter(user=>user.id!==action.payload.id)
        }
    }
})
export const {addUser, getUser, updateuser, deleteuser}=userSlice.actions
export default userSlice.reducer