import React from 'react';

import CoronaDashBoard from './components/coronareport/component';
import './App.css';

function App() {

  //const[loc, setloc] = useState('India');
  //const data = async () => {
   // const ApiResponse = await fetch("https://api.covid19api.com/total/country/${loc}");
   // const ResJSON = await ApiResponse.json();
   // return ResJSON;
  //}
  //const handleSearch = e => {
    //e.preventDefault();
    //data().then( res => {
     // console.log
    //})
  //}
  return (
    <div className="App" >
    <CoronaDashBoard colorh="blue" colorl="lightblue" loc="Worldwide" total="1,32,66,241" active="49,57,027" recovered="77,32,929" death="5,76,285"/> 
    <CoronaDashBoard colorh="orangered" colorl="yellow" loc="India" total="9,11,629" active="3,13,888" recovered="5,73,953" death="23,788"/> 
    <CoronaDashBoard colorh="green" colorl="lightgreen" loc="Maharashtra" total="2,60,627" active="1,05,638" recovered="1,44,507" death="10,482"/> 
    </div>
  );
}

export default App;
