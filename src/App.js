import './App.css';
import MovieList from './MovieList';
import Formulaire from './Formulaire';
import MovieCard from './MovieCard';
import Add from './Add';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Description from './home/Description';
import { Datas } from './Datas';
function App() {
 const [newMovie,setNewMovie] = useState(
         {
            title:'',
            description:'',
            postURL:''
       }
      )


  return (
    <div className="App">

      <Routes>
      <Route path='/' element = {<MovieList/>} />
      <Route path='description/:id' element = {<Description/>} />
      </Routes>
      <Formulaire />
      <Add/>
      
    
      
      
    </div>
  );
}

export default App;
