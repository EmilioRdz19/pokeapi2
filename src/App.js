import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const obtenerPokemon = async()=>{
    try{
      const res= await axios.get('https://pokeapi.co/api/v2/pokemon/')
      console.log(res.data.results)
    }catch(error){
      console.log(error)
    }
  }
  const[pokemon,setPokemon] =
  useState([{}])
  useEffect(()=>{
    obtenerPokemon()
    const res= obtenerPokemon()
    setPokemon(res)
  },[])

}
export default App;

