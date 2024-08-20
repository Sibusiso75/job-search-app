import { createSlice } from "@reduxjs/toolkit";

const employerSlice = createSlice({
    name:"employers",
    initialState:{
        employers:[]
    },
    reducers:{
        addemployer:(state, action)=>{
           state.employers.push(action.payload)
        },
        getemployer:(state, action)=>{
         state.employers = action.payload.map(employer=>{
            return {id:employer.id,username:employer.username,companyName:employer.companyName,province:employer.province,area:employer.area,description:employer.description,age:employer.age,employername:employer.employername, gender:employer.gender,email:employer.email, isAdmin:employer.isAdmin}
        })
        },
        updateemployer:(state, action)=>{
            const index = state.employers.findIndex(employer=>employer.id===action.payload.id)
            state.employers[index]={
                id:employer.id,age:employer.age,employername:employer.employername, gender:employer.gender,email:employer.email, isAdmin:employer.isAdmin
            }
        },
        deleteemployer:(state, action)=>{
            state.employers.filter(employer=>employer.id!==action.payload.id)
        }
    }
})
export const {addemployer, getemployer, updateemployer, deleteemployer}=employerSlice.actions
export default employerSlice.reducer