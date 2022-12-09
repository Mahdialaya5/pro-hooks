 import Card from "../card/card";
import React from 'react';



 const Cards= ({c,deleteCard}) => {
    return (
      <div className="f">
        {c.map(el=><Card title={el.title} 
                               description={el.description}
                               posteurl={el.posteurl}
                               id={el.id}
                               key={el.id}
                               rating={el.rating}
                               Img={el.Img}
                               deleteCard={deleteCard}
                               />)
                               }
        </div>
    )
  };
  export default Cards;