import { createSlice } from "@reduxjs/toolkit";

const savedJobsSlice = createSlice({
    name:"saveJobs",
    initialState:{
        savedJobs:[]
    },
    reducers:{
        saveJob:(state, action)=>{
           state.savedJobs.push(action.payload)
        },
        getsavedJob:(state, action)=>{
         state.savedJobs = action.payload.map(job=>{
            return {id:job._id,username:job.username,userId:job.userId, savedJobs}
        })
        
        },
        updateJob:(state, action)=>{
            const index = state.savedJobs.findIndex(job=>job._id===action.payload.id)
            state.savedJobs[index]={
                title,createdAt,numberOfPeopleToHire,description,jobLocation,reside,jobUrl,province,area,jobType}
            
        },
    }
})
export const {saveJob, getsavedJob, updateJob}=savedJobsSlice.actions
export default savedJobsSlice.reducer