import React, { useState,useEffect } from 'react'
import { FaUserCircle, FaHome, FaArrowAltCircleLeft, FaComment, FaRegWindowClose, FaAlignJustify, FaChevronRight, FaInfoCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getArticle } from '../../../../redux/slices/articleSlice';
import ArticleProps from './ArticleProps';
import { toast } from 'react-toastify';
import { MdArticle, MdOutlineLogout, MdOutlinePostAdd, MdPostAdd, MdWork } from 'react-icons/md';

function Article() {
  const articles = useSelector(state => state.articles.articles)
  // const loggedIn = useSelector(state=>state.users.loggedIn)
  const dispatch = useDispatch()
  // let navigate = useNavigate()
  const [post, setPost] = useState("")
  const [show, setShow] = useState(false)

// async function handleSubmit(e){
//   e.preventDefault()
//   try {
//     const response = await axios.post("http://localhost:5000/addArticle",{})
//     if(response.data.status==true && loggedIn==true){
//       Toast.success(response.data.message)
//     }
//     else if(!loggedIn){
//       navigate("/login")
//       Toast.error("Not logged")

//     }
//     else{
//       Toast.error(response.data.message)
//     }
//   } catch (error) {
//     Toast.error(response.data.error)
//   }
// }
// useEffect(()=>{
//   const verifyUser = async ()=>{
//     const response = await axios.get("http://localhost:5000/verify")
//     if(response.data.status){
//       dispatch(loggedIn(true))
//     }
//   }
//   verifyUser()
// },[])
  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("https://job-search-api-n5ob.onrender.com/articles")
      const data = await response.json()
      dispatch(getArticle(data))
    }
    fetchArticles()
  }, [])

    function postSubmit(){
        // if(post!==""){

        //   toast.success("Posted successfully")
        // }
        // else{
        //   toast.error("Cannot submit an empty value")

        // }
  }

  return (
    <div>
      
      <header className="cartNav">
        <Link to="/" ><FaHome/> Home</Link>
        <Link to="/posts" style=
        {{borderBottom:"2px double white"}}><MdArticle/> Posts</Link>
          <Link to="/savedJobs"> <MdWork/> Saved Jobs</Link>
          <span className='alignRight' onClick={()=>setShow(!show)} >
                                 {show?<span><FaRegWindowClose/></span>:<span><FaAlignJustify/></span>} 
                            </span>
                               
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

          <div className='post'>
          <textarea onChange={(e)=>setPost(e.target.value)} className="txtArea"placeholder="What's on your mind?" />
              <button onClick={postSubmit} style={{height:"fit-content",background:"rgb(0,0,15)",marginTop:"15px",padding:"10px",borderRadius:"5px",color:"white"}}>
              Post 
              </button>
          </div>

        {articles.map((article) => {
          return <ArticleProps key={article.id} {...article}/>
        })}
        </div>



  
    </div>
  )
}

export default Article