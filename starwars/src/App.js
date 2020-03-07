import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";

import Person from "./components/Person"


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const [personData, setPersonData] = useState({});
 // {data: {…}, status: 200, statusText: "", headers: {…}, config: {…}, …}data: count: 87next: "https://swapi.co/api/people/?page=2"previous: nullresults: Array(10)0: {name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair", …}name: "Luke Skywalker"height: "172"mass: "77"hair_color: "blond"skin_color: "fair"eye_color: "blue"birth_year: "19BBY"gender: "male"homeworld: "https://swapi.co/api/planets/1/"films: (5) ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"]species: ["https://swapi.co/api/species/1/"]vehicles: (2) ["https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/"]starships: (2) ["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"]created: "2014-12-09T13:50:51.644000Z"edited: "2014-12-20T21:17:56.891000Z"url: "https://swapi.co/api/people/1/"__proto__: Object1: {name: "C-3PO", height: "167", mass: "75", hair_color: "n/a", skin_color: "gold", …}2: {name: "R2-D2", height: "96", mass: "32", hair_color: "n/a", skin_color: "white, blue", …}3: {name: "Darth Vader", height: "202", mass: "136", hair_color: "none", skin_color: "white", …}4: {name: "Leia Organa", height: "150", mass: "49", hair_color: "brown", skin_color: "light", …}5: {name: "Owen Lars", height: "178", mass: "120", hair_color: "brown, grey", skin_color: "light", …}6: {name: "Beru Whitesun lars", height: "165", mass: "75", hair_color: "brown", skin_color: "light", …}7: {name: "R5-D4", height: "97", mass: "32", hair_color: "n/a", skin_color: "white, red", …}8: {name: "Biggs Darklighter", height: "183", mass: "84", hair_color: "black", skin_color: "light", …}9: {name: "Obi-Wan Kenobi", height: "182", mass: "77", hair_color: "auburn, white", skin_color: "fair", …}length: 10__proto__: Array(0)__proto__: Objectstatus: 200statusText: ""headers: {content-type: "application/json"}config: {url: "https://swapi.co/api/people/", method: "get", headers: {…}, transformRequest: Array(1), transformResponse: Array(1), …}request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}__proto__: Object





useEffect (()=> {
   
    axios.get("https://swapi.co/api/people/")
    .then ( 
     
     res => setPersonData(res.data.results)
    )
  
.catch(err => console.log(err))
  }, [])


 console.log(personData);
 setTimeout( function () { return (
    
    
    <div className="App">
      <h1 className="Header">React Wars</h1>
    
    { personData.map( (item) => {
    
    return <Person person={item} />
     })
    }
    
    
   
    </div>
 
    )}, 4000);
 
}

export default App;
