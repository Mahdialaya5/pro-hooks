import "bootstrap/dist/css/bootstrap.min.css";
import { Rating } from 'react-simple-star-rating'
function Card(props) {
  return(
    <div className="ca"> 
    
  <div className="card" >
  <img src={props.Img} className="card-img-top" alt="..."/>
    <div className="card-body">

      <h5 className="card-title">{props.title} <i  onClick={()=>props.deleteCard(props.id)} className="fa-solid fa-trash"></i> </h5>
      <p className="card-text"> description:{props.description} <br/> posteURL:{props.posteurl}</p>
    <Rating iconsCount={5} readonly={true} initialValue={props.rating} />
    </div>
  </div>
</div>

  )
  }

    export default Card;