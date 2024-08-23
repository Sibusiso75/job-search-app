import React, {useState,useEffect} from 'react'
import JobProps from './JobProps'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { getJob } from '../../../../redux/slices/jobSlice'
import { getUser } from '../../../../redux/slices/userslice'
import { FaUserCircle, FaHome, FaSearch, FaChevronRight, FaAlignJustify, FaAlignLeft, FaWindowClose, FaAlignRight, FaDoorClosed, FaRegWindowClose, FaStickyNote, FaInfo, FaInfoCircle} from 'react-icons/fa'
import { Link, useNavigate, useLocation} from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import { MdAlignHorizontalLeft, MdAlignVerticalCenter, MdArrowDropDown, MdArticle, MdCloseFullscreen, MdDarkMode, MdOutlineAlignVerticalCenter, MdOutlineLogout, MdTab, MdWork } from 'react-icons/md'

// const salaries = [
//   {name:'$1 to $50', value:`1-50`},
//   {name:'$51 to $200', value:`51-200`},
//   {name:'$201 to $1000', value:`201-1000`},
//   {name:'$51 to $200', value:`51-200`},

// ]
// const salaries = [
//   {name:'R1K to R4.9k', value:`1000-50000`},
//   {name:'R5K to R19.9K', value:`5000-20000`},
//   {name:'R20K to R49.9k', value:`20001-100000`},
//   {name:'R50k to R100k', value:`20001-100000`},
//   {name:'R100k to 1m', value:`10000`},
//   {name:'R1m+', value:`1000000 - 1000000`},


// ]
function Home() {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const jobs = useSelector(state=>state.jobs.jobs)
  // const loggedIn = useSelector(state=>state.users.loggedIn)
  const [show, setShow] = useState(false)
  const [query, setQuery]= useState("")
  // const [id, setId] = useState(null)

  // axios.defaults.withCredentials=true;
  // async function handleLogOut(e){
  //   e.preventDefault()
  //   const response = await axios.get("http://localhost:5000/logout")
  //     if(response.data.status){
  //         dispatch(loggedIn(false))
  //         navigate("/login")
  //     }
  // }

  // const {search}= useLocation()
    // const [categories, setCategories]= useState("")
// const searchParams =new URLSearchParams(search)
// const category = searchParams.get('category ') || 'all'
// const q = searchParams.get('query') || 'all'
// const price = searchParams.get('price') || 'all'
// // const rating = searchParams.get('rating') || 'all'
// const order = searchParams.get('order') || 'newest'
// const page = searchParams.get('page') || 1







    // function handleSubmit(e){
    //   e.preventDefault()
    //   navigate(query?`/search?query=${query}`:"/home")
    // }

    // const category = searchParams.get('category') || 'all'
    // const q = searchParams.get('query') || 'all'
    // const price = searchParams.get('price') || 'all'
    // // const rating = searchParams.get('rating') || 'all'
    // const order = searchParams.get('order') || 'newest'
    // const page = searchParams.get('page') || 1
//     useEffect(() => {
//       const fetchData = async ()=>{
// try {
//    const response = await axios.get(`http://localhost:5000/jobs/search?page=${page}&query=${q}&category=${category}&price=${price}&order=${order}`)
//     dispatch(getJob(response.data))

// } catch (error) {
//        console.log(error) }}
//   fetchData()
// }, [page, q, category, order,price])



// useEffect(() => {
//   const fetchCategories = async ()=>{
// try {
// const response = await axios.get(`http://localhost:5000/jobs/categories`)
//  setCategories(response.data)
// } catch (error) {
//    console.log(error) }}
// fetchCategories()
// }, [])
// https://job-search-api-n5ob.onrender.com
 useEffect(() => {
   const fetchJobs = async ()=>{
    const response = await fetch("http://localhost:5000/jobs")
    const data = await response.json()

    dispatch(getJob(data))
   }
   fetchJobs()
 }, [])
//  useEffect(()=>{
//    const fetchUser =async ()=>{
//     const response = await axios.get("http://localhost:5000/verify")
//         dispatch(loggedIn(true))
//         setUsername(response.data.username)
//         setId(response.data.id)
//    }
//    fetchUser()
//  },[])



//  function getFilterUrl(filter){
//    const filterPage = filter.page || page
//   const filterCategory = filter.category || category
//     const filterQuery = filter.query || q
//     const filterPrice =filter.price  || price
//     // return `http://localhost:5000/jobs/search?page=${filterPage}&query=${filterQuery}&category=${filterCategory}&price=${filterPrice}&order=${filterOrder}`
//     // const rating = searchParams.get('rating') || 'all'
//     const filterOrder = filter.order || order
    
//     return `/jobs/search?page=${filterPage}&query=${filterQuery}&category=${filterCategory}&price=${filterPrice}&order=${filterOrder}`
//  }

 
  return (
    <div>
        <header className="cartNav">
        <Link to="/" style={{borderBottom:"2px double white"}} ><FaHome/> Home </Link>
        <Link to="/posts"><MdArticle/> Posts</Link>
          <Link to="/savedJobs"> <MdWork/> Saved Jobs</Link>
       <br />
                <div className='alignRight' onClick={()=>setShow(!show)} >
                                 {show?<div><FaRegWindowClose/></div>:<div><FaAlignJustify/></div>} 
                            </div>
      </header>
      <br /><br />

      
     {show?  <div style={{position:"fixed",right:"2px",display:"flex",flexDirection:"column",
     gap:"1rem",float:"right",background:"rgb(0,0,10)", color:"white", marginRight:"0px",width:"300px", padding:"10px"}}>

      {/* {loggedIn?<div>
        <Link to={`/profile/${id}`} style={{borderBottom:"1px double white"}}><FaUserCircle /> {username} <FaChevronRight style={{float:"right"}}/></Link>
          <Link to="/login" style={{borderBottom:"1px double white"}}> <MdOutlineLogout/> Log out  <FaChevronRight style={{float:"right"}}/></Link>
        </div>
        : */}
        <div style={{position:"fixed",right:"2px",display:"flex",flexDirection:"column",
     gap:"1rem",float:"right",background:"rgb(0,0,10)", color:"white", marginRight:"0px",width:"300px", padding:"10px"}}>
          {/* <Link to="/register">Register</Link>
            <button onClick={handleLogOut}>Log out</button> */}
            <Link to="/info">Info <FaInfoCircle/> <FaChevronRight style={{float:"right"}}/> </Link>

          </div>
{/* } */}

              
              
      </div>
      :null
     }
      {/* <div>
        
        
        <h3>Department</h3>
        <ul>
        <li>
        <Link className={'all'===category?'text-bold':''}
        to={getFilterUrl({category:'all'})}
        >
        Any
        </Link>
        </li>
          {
            categories.map((c)=>(
              <li key={c}>
                <Link className={c===category?'text-bold':''}
                to={getFilterUrl({category:c})}
                >
                {c}
                
                </Link>
                </li>
                ))
              }
              </ul>
              
              </div>
      <div>
        <h3>Salary</h3>
        <ul>
          <li>
            <Link className={'all'===salary?'text-bold':''}
            to={getFilterUrl({salary:'all'})}>Any</Link>

          </li>
          {
            salaries.map((s)=>(
              <li key={s.value}>
                <Link className={s.value===salary?'text-bold':''}
                to={getFilterUrl({salary:s.value})}>
                    {s.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div> */}
      <br /><br />
        
         {/* <Row className="justify-content-between mb-3">
          <Col md={6}> */}
            <div>
              {/* {countJobs===0? 'No':countJobs} Results
              {query!=='all'&& ':' + query} 
              {category!=='all'&& ':' + category} 
              {salary!=='all'&& ': Salary' + salary} 
            
               */}
              <input type="text" onChange={(e)=>setQuery(e.target.value)} 
              
              placeholder='search by job title, province and city ...'/>
              {/* <button onClick={handleSubmit}><FaSearch/></button> */}
              
               </div>

          {/* </Col> */}
          {/* <Col className="text-end">
            Sort By {''}
            <select value={order} onChange={(e)=>{navigate(getFilterUrl({order:e.target.value}))}}>
               <option value="newest">newest</option>
                 <option value="lowest">lowest</option>
                 <option value="highest">highest</option>
         </select>
          </Col> */}
         {/* </Row> */}

        
        <div style={{display:"flex",gap:"1rem"
       , flexWrap:"wrap",
}}>
  {/* {jobs.length===0 && <h3>No jobs found</h3>} */}
            {
                jobs.filter((job)=>{
                  return job.title.toLowerCase().includes(query.toLowerCase()) ||
                  job.province.toLowerCase().includes(query.toLowerCase())||

                 job.area.toLowerCase().includes(query.toLowerCase())
                  || job.posted.toLowerCase().includes(query.toLowerCase())
                  

                }).map((job)=>{
                      return <JobProps key={job.id} {...job}/>                               
                })
            }
            {/* {[...Array(pages).key()].map((x)=>(
              <Link key={x+1} className='mx-1' to={getFilterUrl({page:x+1})}>
                <button className={Number(page)===x+1?"text-bold":''}>
                    {x+1}
                </button>
              </Link>
            ))} */}
            

        </div>
        <br /><br />



       
    </div>
  )
}

export default Home