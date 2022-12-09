
import React, { useState } from 'react'

function Nav({add,Clear}){

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [url,setUrl]= useState("")
    const [rating,setRating]= useState("")
    return (<nav id="na" className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
   
      <>
        <input className="form-control me-2"  placeholder="add title"  onChange={(e) => setTitle(e.target.value)} />
        <input className="form-control me-2"  placeholder="add desc"  onChange={(e) => setDesc(e.target.value)}/>
        <input className="form-control me-2"  placeholder="add poste URL"  onChange={(e) => setUrl(e.target.value)}/>
        <input className="form-control me-2"  placeholder="add rating"   onChange={(e) => setRating(e.target.value)}/>
        <button className="btn btn-outline-success"  onClick={()=>add(title,desc,url,rating)&& Clear(title)}>ADD</button>
      </>
    </div>
  
</nav>

)}
  export default Nav ;