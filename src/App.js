import React, { useState } from 'react';
import List from './List';
import './App.css';
import {person} from './people'
export default function App() {
    const [people,setPeople] = useState(person)
    const [empoty,setEmpoty] = useState(true)  
  
    return (
       <>
           <main>
               <section className="container">
                   <div>
                   <h3>{people.length} birthdays today</h3>
                    <List people={people} />
                   
                    <button 
                    className="btn"
                    onClick={()=>setPeople([])}
                    >Clear</button>
                    </div>
               </section>
                
           </main>
       </>
    )
}
