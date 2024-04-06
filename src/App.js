import React, {useState} from "react";
import data from './data';
import Tours from "./components/Tours";
// import useState from 'react';
// import useState from 'react'
const App = () => {
  const [tours, settours] = useState(data)

  function removeTour(id){
    const newTours=tours.filter(tour => tour.id !== id);
    settours(newTours);
  }

  if(tours.length===0){
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={()=>settours(data)} >Refresh</button>
      </div>
    )
  }

  return <div className="App" >
    {/* <h2>Plan with Arvind</h2> */}
    <Tours tours= {tours} removeTour={removeTour} ></Tours>
  </div>;
};

export default App;
