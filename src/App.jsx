import {lazy,Suspense} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from './Components/Admin/User'
import EditJob from './Components/Admin/EditJob'
import EditArticle from './Components/Admin/EditArticle'
// import JoinOption from './Components/Frontend/JoinOption'
import EmployerLogin from './Components/Frontend/Employer/EmplAuth/EmployerLogin'
import EmployerSignUp from './Components/Frontend/Employer/EmplAuth/EmployerSignUp'
import Employers from './Components/Admin/Employers'
import Employer from './Components/Admin/Employer'
import AdminLogin from './Components/Admin/AdminLogin'
import HomeNav from './Components/Frontend/JobSeeker/Home/HomeNav'
// import EditUser from './Components/Admin/EditUser'
import ProfileEditUser from './Components/Frontend/JobSeeker/Home/ProfileEditUser'
import EmployerHome from './Components/Frontend/Employer/EmplHome/EmployerHome'
import EmployerProfile from './Components/Frontend/Employer/EmplHome/EmployerProfile'
import EmployerEdit from './Components/Frontend/Employer/EmplHome/EmployerEdit'
import EmployerArticle from './Components/Frontend/Employer/EmplHome/EmployerArticle'
import EmployerJobs from './Components/Frontend/Employer/EmplHome/EmployerJobs'
import EmpAddJob from './Components/Frontend/Employer/EmplHome/EmpAddJob'
import EmpEditJob from './Components/Frontend/Employer/EmplHome/EmpEditJob'
// import Education from './Components/Frontend/JobSeeker/Home/Education'
// import PersonalDe from './Components/Frontend/JobSeeker/Home/PersonalDe'
// import WorkHistory from './Components/Frontend/JobSeeker/Home/WorkHistory'
// import MyJobs from './Components/Frontend/JobSeeker/Home/MyJobs'
import SingleArticle from './Components/Frontend/JobSeeker/Home/SingleArticle'
import Note from './Note'
// import ProfileView from './Components/Frontend/Employer/EmplHome/ProfileView'
import ResetPassword from './Components/Frontend/JobSeeker/Auth/ResetPassword'
const Home = lazy(()=>import('./Components/Frontend/JobSeeker/Home/Home'))
const Login=  lazy(()=>import('./Components/Frontend/JobSeeker/Auth/Login'))
const SignUp= lazy(()=>import('./Components/Frontend/JobSeeker/Auth/SignUp'))
const EmailVerification= lazy(()=>import('./Components/Frontend/JobSeeker/Auth/EmailVerification'))
const Job= lazy(()=>import('./Components/Frontend/JobSeeker/Job'))
const ForgotPassword= lazy(()=>import('./Components/Frontend/JobSeeker/Auth/ForgotPassword'))
const AddArticle = lazy(()=>import('./Components/Admin/AddArticle'))
const AddJob =lazy(()=>import('./Components/Admin/AddJob'))
const Users= lazy(()=>import( './Components/Admin/Users'))
const Reports =lazy(()=>import('./Components/Admin/Reports'))
const Admin=  lazy(()=>import( './Components/Admin/Admin'))
const AllJobs= lazy(()=>import( './Components/Admin/AllJobs'))
const Article= lazy(()=>import( './Components/Frontend/JobSeeker/Home/Article'))
const AllArticles =lazy(()=>import( './Components/Admin/AllArticles'))
import ReactLoading from 'react-loading';

function App(){
  return ( 
    <BrowserRouter>
  

      <Suspense fallback={<ReactLoading type={"spinningBubbles"} color={"blue"} height={667} width={375} />}>
     
     <Routes>
      <Route path="/" element={<Home/>}></Route>  
      
      <Route path="/info" element={<Note/>}></Route>  
      <Route path="/users/:id/verify/:token" element={<EmailVerification/>}></Route>
      <Route path="/job/:id" element={<Job/>}></Route>    
      <Route path="/register" element={<SignUp/>}></Route> 
      <Route path="/sidebar" element={<HomeNav/>}></Route>  
      <Route path="/employerProfile/:id" element={<EmployerProfile/>}></Route>         
       <Route path="/employerProfile/:id/editEmployer/:id" element={<EmployerEdit/>}></Route>         
      <Route path="/employerJobs/:id" element={<EmployerJobs/>}></Route>            
       <Route path="/employerJobs/:id/editJob/:id" element={<EmpEditJob/>}></Route>         
      {/* <Route path="/profile/:id/editUser/:id" element={<ProfileEditUser/>}></Route>          */}
      {/* <Route path="/editUser/:id" element={<EditUser/>}></Route>   */}
      <Route path="/profile/:id" element={<ProfileEditUser/>}></Route>   
      {/* <Route path="/profileView/:id" element={<ProfileView/>}></Route>          */}
    
      {/* <Route path="/profile/:id/education/:id" element={<Education/>}></Route>         
      <Route path="/profile/:id/myJobs/:id" element={<MyJobs/>}></Route>         
      <Route path="/profile/:id/workHistory/:id" element={<WorkHistory/>}></Route>          */}
      <Route path="/singleArticle/:id" element={<SingleArticle/>}></Route>      
      {/* <Route path="/join" element={<JoinOption/>}></Route>       */}
      <Route path="/login" element={<Login/>}></Route> 
      <Route path="/employerHome" element={<EmployerHome/>}></Route>  
      <Route path="/employers" element={<Employers/>}></Route> 
      <Route path="/addJob" element={<EmpAddJob/>}></Route>            
      <Route path="/employerLogin" element={<EmployerLogin/>}></Route>         
      <Route path="/employerSignUp" element={<EmployerSignUp/>}></Route> 
      <Route path="/forgotPassword" element={<ForgotPassword/>}></Route>  
      <Route path="/resetPassword/:token" element={<ResetPassword/>}></Route>      
      <Route path="/posts" element={<Article/>}></Route>
      <Route path="/employerArticles" element={<EmployerArticle/>}></Route>
      <Route path="/editArticle/:id" element={<EditArticle/>}></Route>
      <Route path="/admin/dashboard" element={<Admin/>}></Route>
      <Route path="/editJob/:id" element={<EditJob/>}></Route>
      <Route path="/user/:id" element={<User/>}></Route>
      <Route path="/admin" element={<AdminLogin/>}></Route>
      <Route path="/employer/:id" element={<Employer/>}></Route>
      <Route path="/admin/addArticle" element={<AddArticle/>}></Route>
      <Route path="/admin/articles" element={<AllArticles/>}></Route>    
      <Route path="/admin/addJob" element={<AddJob/>}></Route>     
      <Route path="/admin/users" element={<Users/>}></Route>   
      <Route path="/admin/reports" element={<Reports/>}></Route>         
      <Route path="/admin/jobs" element={<AllJobs/>}></Route>      
      <Route path="*" element={<h2>404 - Page not found</h2>}></Route>
</Routes>
      
      </Suspense>
     
    </BrowserRouter>
  )
}

export default App
   