import { createSlice } from "@reduxjs/toolkit";

const reportSlice = createSlice({
    name:"reports",
    initialState:{
        reports:[]
    },
    reducers:{
        addReport:(state, action)=>{
           state.reports.push(action.payload)
        },
        getReport:(state, action)=>{
         state.reports = action.payload.map(report=>{
             
             return {id:report.id,username:report.username,email:report.email,posted:report.posted,title:report.title,report:report.report, description:report.description}
        })
        }
    }
})
export const {addReport, getReport}=reportSlice.actions
export default reportSlice.reducer