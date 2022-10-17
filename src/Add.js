import React from "react";
import { useState } from "react";

const Add = ({setNewMovie,newMovie,submit})=>{
    
     return (
        <>
           
           
           <div className="ajouter">      
           <div>
           <input type="text"
              name = 'Title'
              placeholder="Title"
              onChange={e => {setNewMovie({...newMovie.title}); }}
              /> 
              </div>
              <div>
                <input type="text"
              name="Description"
              placeholder="Description"
              />
              </div>
              <div>
              <input type="text"
              name="PostURL"
              placeholder="PostURL"
              />
           </div>
           <button onClick={submit}  className= 'add'>Ajouter</button>
         </div>
         
      </>  
    
     )
    
}
export default Add;