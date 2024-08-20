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
        			
            return {level:job.level,EmployeesResideInJoblocation:job.EmployeesResideInJoblocation,locationThatBestDescriptionsTheJob:job.locationThatBestDescriptionsTheJob,numberOfPeopleToHire:job.numberOfPeopleToHire,jobType:job.jobType,province:job.province,area:job.area,posted:job.posted,id:job.id,title:job.title,description:job.description, url:job.url,isAdmin:job.isAdmin}
        })
        },
        updateJob:(state, action)=>{
            const index = state.jobs.findIndex(job=>job.id===action.payload.id)
            state.jobs[index]={
               EmployeesResideInJoblocation:job.EmployeesResideInJoblocation,
               locationThatBestDescriptionsTheJob:job.locationThatBestDescriptionsTheJob,
               numberOfPeopleToHire:job.numberOfPeopleToHire,jobType:job.jobType,page:job.page,countJobs:job.countJobs,pages:job.pages,province:job.province,area:job.area,posted:job.posted,id:job.id,title:job.title,level:job.level,description:job.description,requirements:job.requirements, url:job.url,isAdmin:job.isAdmin}
            
        },
    }
})
export const {addjob, getJob, updateJob}=jobSlice.actions
export default jobSlice.reducer