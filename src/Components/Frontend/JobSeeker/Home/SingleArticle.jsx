import React, { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import { FaArrowCircleLeft,  FaCommentAlt,   FaRegWindowClose,  FaRegThumbsUp,  FaUserCircle} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

function SingleArticle() {
  let { id } = useParams()
  let navigate = useNavigate()
  const articles = useSelector(state => state.articles.articles)
  const article = articles.find(a => a.id == id)


  const [showDeleteComment, setShowDeleteComment] = useState(false)
  const [showReplyForm, setShowReplyForm] = useState(false)
  const [showLikes, setShowLikes] = useState(false)
  const [showReplies, setShowReplies] = useState(false)
   
  
  
  return (
    <div >
  <div >

      <button onClick={() => navigate("/posts")}
        style={{ background: "gray", color: "whitesmoke", fontWeight: "bold" }}>
        <FaArrowCircleLeft />
      </button>
      <div style={{opacity:showLikes?"0.7":1,  padding: "10px", top: "0px", height: "fit-content", position: "relative" }}>

        <div style={{ display: "flex"}
        }>

          <FaUserCircle style={{ borderRadius: "30px", fontSize: "30px" }} /> <h5>{article.name}</h5>
          ,<p style={{ color: "gray" }}>{article.date}, {article.time}</p>
        </div>
        <p>{article.post}</p>

      </div>

     
        {
          showLikes? <div style={{ position:"absolute",background:"black",top:"-5px", color:"white",border:"1px solid black", padding:"20px", height:article.likes.length<=7?"100%":"fit-content",width:"100%"}}>
              <div style={{display:"flex",gap:"0.5rem"}}>

       {article.likes.length===0? 
       "No one likes this post":
       article.likes.length===1? 
       article.likes.length + " person likes this post":article.likes.length + " people like this post"} 
                <FaRegWindowClose style={{float:"right"}}onClick={()=>setShowLikes(false)}/>
              </div>
              <hr />
           <ol>

              {article.likes.map((like,index)=>{
                return <div key={index}>
                  <li> 
                    <FaUserCircle/> {like.username} {like.username==article.name? "(author)":""} <FaRegThumbsUp style={{color:"darkblue"}}/> 
                  </li>

                  <hr />
               </div>
              })}
              </ol>
            </div>
            :
            
            
            <div onClick={()=>setShowLikes(!showLikes)} style={{display:"flex",gap:"0.5rem",flexDirection:"column",borderBottom:"1px solid gray",color:"gray",padding:"10px"}}>
              <span className='likes'>
              {
                
                article.likes.length==0?
                <p style={{color:"gray"}}>Be the first one to like this post</p>
                
                : 
                article.likes.length==1? 
                
                <span style={{fontSize:"10px", border:"1px dotted gray",borderRadius:"30px",color:"darkblue",width:"fit-content",padding:"10px"}} onClick={()=>navigate(`/singleArticle/${id}`)}>
        <FaRegThumbsUp/>
      <span style={{color:"gray"}}>{article.likes[0].username} likes this post</span>
          </span>

: article.likes.length==2?
<span style={{color:"darkblue",width:"fit-content",padding:"10px"}} onClick={()=>navigate(`/singleArticle/${id}`)}>
        <FaRegThumbsUp/> <span style={{color:"gray"}}>{article.likes[0].username} and {article.likes[1].username} like this post</span>
          </span>
        
        :
        article.likes.length==3?
        <span style={{color:"darkblue",width:"fit-content",padding:"10px"}}  onClick={()=>navigate(`/singleArticle/${id}`)}> <FaRegThumbsUp/>
         <span style={{color:"gray"}}> {article.likes[0].username}, {article.likes[1].username} and {article.likes[2].username} like this post</span>
        </span>



:
<span onClick={()=>navigate(`/singleArticle/${id}`)}>
        <FaRegThumbsUp style={{color:"blue"}}/> <span style={{color:"gray"}}>{article.likes[0].username}, {article.likes[1].username} and {article.likes.length-2} others like this post</span>
        </span>






}
                </span> 
                
                    <span style={{display:"flex",gap:"0.3rem"}}>

<button style={{padding:"10px",width:"100px",background:"white",borderRadius:"20px", border:"1px solid gray"}} >
     <FaRegThumbsUp/> {article.likes.length}
     </button>
     <button style={{border:"1px solid gray",width:"100px",background:"white",padding:"10px",borderRadius:"20px"}} >
     <FaCommentAlt/> {article.comments.length}
     </button>
     </span>  
    
             
            </div>

}
</div>
{/* box-shadow:-1px 1px -2px 3px black;
    background: rgb(0,0,15);
    word-wrap: break-word;
    color:white;
    width:100%;
    padding:10px;
    padding-bottom: 100%; */}
         {
            !showLikes &&
            <div className='singleArticle'>

        <div style={{display:"flex"}}>

        <input type="text" placeholder="write a comment" style={{ outline:"none",borderRadius: "20px", padding: "10px" }} />
        <button style={{ marginLeft:"0px",margin:"15px",height:"40px",background: "teal" }}>Post comment</button>
        </div>

        {
          article.comments.map((c) => {
            return <div key={c.id} className='comments'>
              <div style={{ display: "flex", gap: "0.2rem" }}>
   
<FaUserCircle style={{ fontSize: "30px" }} />{c.username} {article.name==c.username? "(author)": ""},
<p style={{ color: "gray" }}>
  {c.date}, {c.time}
</p>
</div>

<p>{c.comment}</p>
             
                 
            

             {
              showReplies===false?
              <div >
                
              
                              
                

               <p onClick={()=>setShowReplies(!showReplies)} style={{borderBottom:"2px solid white",width:"fit-content",fontWeight:"bold"}}>{c.replies.length===1? `${c.replies.length} reply on ${c.username}'s comment`:`${c.replies.length} replies on ${c.username}'s comment`} </p>
              </div>
              :
              
              <div>
              <div style={{display:"flex", height:"100%",width:"100%",gap:"0.2rem"}}>

                      <FaArrowCircleLeft style={{fontSize:"20px"}} onClick={()=>setShowReplies(!showReplies)}/><p style={{fontWeight:"bold",borderBottom:"2px solid gray"}}>
                        replies on {c.username}'s comment
                      </p>
                      
                     
                      
              </div>
{
          c.replies.map((r,index) => {
            return <div key={index} style={{ display: "flex", height:"100%",flexDirection: "column",  borderRadius: "10px", padding: "20px", width: "100%" }}>


              <div style={{ display: "flex", gap: "0.2rem" }}>
                <FaUserCircle style={{ fontSize: "30px" }} />{r.username},
                <p style={{ color: "gray" }}>
                  {r.date}, {r.time}
                </p>
                
              </div>
              
            {r.reply}
            
             

                 
            

            </div>

})
}
<div style={{display:"flex",width:"20%"}}>

  <input  type="text"  placeholder="write a reply" />
                  <button  style={{margin:"1%",height:"10%",color:"gray",background:"navy"}}>Send <BsSend/></button>
</div>

                 
              </div>
             }
             
            </div>

})
}



</div>

          }
         



                












    </div>
  )
}

export default SingleArticle