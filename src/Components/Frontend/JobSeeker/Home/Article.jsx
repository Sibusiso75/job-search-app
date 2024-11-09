import React, { useState,useEffect } from 'react'
import { FaUserCircle, FaHome, FaArrowAltCircleLeft, FaComment, FaRegWindowClose, FaAlignJustify, FaChevronRight, FaInfoCircle } from 'react-icons/fa';
import { Link,  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getArticle,addArticle } from '../../../../redux/slices/articleSlice';
// import { userLoggedIn } from '../../../../redux/slices/userslice';
import ArticleProps from "./ArticleProps"
import { toast } from 'react-toastify';
import { MdArticle, MdOutlineLogout, MdOutlinePostAdd, MdPostAdd, MdWork } from 'react-icons/md';
import axios from 'axios';

function Article() {
  const loggedIn = useSelector(state=>state.users.loggedIn)
  const dispatch = useDispatch()
  // const [post, setPost] = useState("")
  const articles = useSelector(state => state.articles.articles)
  let navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [id, setId] = useState("")
  const [show, setShow] = useState(false)



useEffect(()=>{
  axios.get("https://job-search-api-n5ob.onrender.com/verify")
  .then(res=>{
    if(res.data.status){
      setId(res.data.id)

      setUsername(res.data.username)
    }
    
  })
},[])
// async function postSubmit(e){
//   e.preventDefault()
//   try {
    
//     const res = await axios.post("http://localhost:5000/addPost", {post})
//     if(res.data.status){
//       dispatch(addArticle(res.data))
//       toast.success(res.data.message)
//     }
//     else{
//       toast.error("error")
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("https://job-search-api-n5ob.onrender.com/articles")
        const data = await response.json()
        dispatch(getArticle(data))
      } catch (error) {
        console.log(error)
      }
    }
    fetchArticles()
  }, [])

return (
  <div>
      <header className="cartNav">
        <Link to="/" ><FaHome/> Home</Link>
        <Link to="/posts" style=
        {{borderBottom:"2px double white"}}> <MdPostAdd/> Posts </Link>
          {/* <Link to="/savedJobs"> <MdWork/> Saved Jobs</Link> */}
          <span className='alignRight' onClick={()=>setShow(!show)} >
                                 {show?<span><FaRegWindowClose/></span>:loggedIn?<span onClick={()=>navigate(`/profile/${id}`)}><FaUserCircle/>{username}</span>:null}                         </span>
                               
      </header>

        
        <div>
        <br /><br />  
        {show?  <div style={{position:"fixed",right:"2px",display:"flex",flexDirection:"column",
     gap:"1rem",float:"right",background:"rgb(0,0,10)", color:"white", marginRight:"0px",width:"300px", padding:"10px"}}>
                 <Link to="/info">Info <FaInfoCircle/> <FaChevronRight style={{float:"right"}}/> </Link>


              
      </div>
      :null
     }
     <br />

          {/* <div className='post'>
          <textarea onChange={(e)=>setPost(e.target.value)} className="txtArea"placeholder="What's on your mind?" />
              <button onClick={loggedIn?postSubmit:()=>navigate("/login")} style={{height:"fit-content",background:"rgb(0,0,15)",marginTop:"15px",padding:"10px",borderRadius:"5px",color:"white"}}>
              Post 
              </button>
          </div> */}
           {
            articles.map((article)=>{
              return <ArticleProps key={article.id} {...article}/>
            })
          }
        
        </div>



  
    </div>
  )
}

export default Article