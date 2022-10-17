import React  from "react";
import { Datas } from "./Datas";
import MovieCard from "./MovieCard";


const MovieList = () => {
     return (
          <div className='MovieListc'>
         
          {
            Datas.map((movie)=>(
            <>
              <MovieCard
                title = {movie.title}
                description = {movie.description}
                postURL = {movie.postURL}
              />
            </>
            
            ))
          }
           
        </div>
     )

}


export default MovieList; 