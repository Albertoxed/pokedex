
import './App.css';
import axios from "axios";
import React, { useState } from "react";



const App  = ()=> {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };



  return (
    <div className="App">
      
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter pokemon name"
          />
        </label>
      </form>
     {pokemonData.map((data) => {
        return(
          <div className="container">
            <img src={data.sprites["front_default"]} />
            
            <div className= "divTable">  
              <div className="divTableBody">
                <div className="divTableRow">
                  <div className="divTableCell">Type </div>
                  <div className="divTableCell">{pokemonType} </div>

            
            <div className="divTableRow">
                  <div className="divTableCell">Height </div>
                  <div className="divTableCell">  {" "}
                    {Math.round(data.height * 3.9)}" </div>

            </div>
            <div className="divTableRow">
                  <div className="divTableCell">Weigth </div>
                  <div className="divTableCell">{""} {Math.round(data.weight/4.3)} lbs </div>

            </div>
            <div className="divTableRow">
                  <div className="divTableCell">Number of battles </div>
                  <div className="divTableCell">{data.game_indices.length}  </div>

            </div>

              </div>
            </div>
            
            </div>
               
            
              
          </div>
          
        )
        
     })}
      </div>
      
  )
  }
  
export default App;
