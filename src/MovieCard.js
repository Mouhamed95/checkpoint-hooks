import React, {useState} from 'react'
import { Datas } from './Datas';




const MovieCard = (props) => {

return (
  
  <div className='Props'>


      <h1> {props.title} </h1>
      <img src={props.postURL} alt={props.title} />
      <p> {props.description} </p>
  </div>
)

}

export default MovieCard ;