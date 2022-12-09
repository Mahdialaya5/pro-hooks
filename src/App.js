import "./App.css";
import Info from "./info";
import Cards from "./compenent/cards/cards";
import Nav from "./nav/nav";
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating'
function App() {
const [Newadd,setNewadd]=useState(Info)
const [search, setSearch]=useState("")
const [clear,setClear]=useState("")

function Add(title,desc,url,rating){
  
  setNewadd([...Newadd,{description:desc,title,rating,posteurl:url,id:Newadd.length+1}])
    }
    function deleteCard(idDelete){
      setNewadd(Newadd.filter((el)=>el.id!==idDelete))
    }
    
    
      const [rating, setRating] = useState(0)
    
      // Catch Rating value
      const handleRating = (rate) => {
        setRating(rate)
      } 
      function Clear(title){
      setClear("")
      }
    
    
      
 return (<> 
  <Nav add={Add} Clear={Clear} />
  <input className="form-control me-2"  placeholder="search"  onChange={(e)=>setSearch(e.target.value)} />
    <Rating  onClick={handleRating} />
    <div >
      <Cards   deleteCard={deleteCard}
 
  c={Newadd.filter((el)=>el.title.toLowerCase().includes(search.toLowerCase().trim())&& el.rating >=rating )}/>  
    </div>
    </>
  );
}

export default App;
