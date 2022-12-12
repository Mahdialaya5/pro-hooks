
import React, { useState } from 'react'

function Nav({add}){

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [url,setUrl]= useState("")
    const [rating,setRating]= useState("")
   const handldeClick=()=>{
    add(title,desc,url,rating) 
     setTitle("")
     setDesc("")
     setUrl("")
     setRating("")
   }
    return (<nav id="na" className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
   
      <>
        <input className="form-control me-2"  placeholder="add title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="form-control me-2"  placeholder="add desc" value={desc} onChange={(e) => setDesc(e.target.value)}/>
        <input className="form-control me-2"  placeholder="add poste URL"  value={url} onChange={(e) => setUrl(e.target.value)}/>
        <input className="form-control me-2"  placeholder="add rating"  value={rating} onChange={(e) => setRating(e.target.value)}/>
        <button className="btn btn-outline-success"  onClick={()=>handldeClick()}>ADD</button>
      </>
    </div>
  
</nav>

)}
  export default Nav ;
  