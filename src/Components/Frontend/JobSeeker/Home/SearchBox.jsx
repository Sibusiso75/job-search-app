import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
function SearchBox() {
    const [query, setQuery] = useState("")
  let navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        navigate(query?`/search/query=${query}`:"/search")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='q' id='q' palceholder="search ..."
            onChange={(e)=>setQuery(e.target.value)} />
            <button type="submit"><FaSearch/></button>
        </form>
    </div>
  )
}

export default SearchBox