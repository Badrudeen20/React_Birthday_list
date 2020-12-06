import React from 'react'
import './List.css'
export default function List({people}) {
    return (
        <div className="wrapper">
          
            {people.map(data=>{
                const {id,name,age,image} = data
            return <article key={id} className="person">
         <img src={image}  alt={name}/>
              <div >
            <h4>{name}</h4> 
            <p>{age} years</p>
              </div>  
            </article>
            
            })}
           
            
        </div>
    )
}
