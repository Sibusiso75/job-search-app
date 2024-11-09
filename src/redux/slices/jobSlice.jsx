import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name:"jobs",
    initialState:{
        jobs:[]
    },
    reducers:{
        addJob:(state, action)=>{
           state.jobs.push(action.payload)
        },
        getJob:(state, action)=>{
         state.jobs = action.payload.map(job=>{
            return {id:job._id,title:job.title,numberOfPeopleToHire:job.numberOfPeopleToHire,
                description:job.description,createdAt:job.createdAt,
                username:job.username,
                userId:job.userId,
                jobLocation:job.jobLocation,
                
                reside:job.reside,jobUrl:job.jobUrl,province:job.province,
                area:job.area,jobType:job.jobType}
        })
        
        },
        updateJob:(state, action)=>{
            const index = state.jobs.findIndex(job=>job._id===action.payload.id)
            state.jobs[index]={
                userId,username,title,createdAt,numberOfPeopleToHire,description,jobLocation,reside,jobUrl,province,area,jobType}
            
        },
    }
})
export const {addJob, getJob, updateJob}=jobSlice.actions
export default jobSlice.reducer