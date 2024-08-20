import { createSlice } from "@reduxjs/toolkit";

const savedJobsSlice = createSlice({
    name:"jobs",
    initialState:{
        savedJobs:[]
    },
    reducers:{
        addJob:(state, action)=>{
           state.savedJobs.push(action.payload)
        },
        getSavedJob:(state, action)=>{
         state.savedJobs = action.payload.map(job=>{
        			
            return {EmployeesResideInJoblocation:job.EmployeesResideInJoblocation,locationThatBestDescriptionsTheJob:job.locationThatBestDescriptionsTheJob,numberOfPeopleToHire:job.numberOfPeopleToHire,jobType:job.jobType,province:job.province,area:job.area,posted:job.posted,id:job.id,title:job.title,description:job.description, url:job.url,isAdmin:job.isAdmin}
        })
        },
       
    }
})
export const {addjob, getSavedJob}=savedJobsSlice.actions
export default savedJobsSlice.reducer