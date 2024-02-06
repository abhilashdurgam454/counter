import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {

     if(counter==0){
      setCounter(0)
     }else{
    setCounter(counter - 1);
     }
  };

  return (
    <div>
      <h1 className="text-center font-bold m-4 text-3xl">{counter}</h1>
      <div className="flex justify-around">
        <button
          onClick={increase}
          className="bg-green-500 font-bold  text-white m-12 text-center border-2 p-3 rounded-md"
        >
          Increase
        </button>

        <button
          onClick={decrease}
          className="bg-red-500 font-bold text-white m-12 text-center border-2 rounded-md p-3"
        >
          Decrease
        </button>
      </div>
    </div>
  );
}
