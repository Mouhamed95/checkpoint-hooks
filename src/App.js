import './App.css';
import MovieList from './MovieList';
import Formulaire from './Formulaire';
import MovieCard from './MovieCard';
import Add from './Add';
import { useState } from 'react';
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
      <Formulaire />
      <Add/>
    
      
      
    </div>
  );
}

export default App;
