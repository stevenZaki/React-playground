"use client";
import { useEffect, useState } from "react";
import Cell from "./cell";
import { Combo } from "next/font/google";

const winningCombos =[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],

]

export default function Home() {

  const [cells, setCells] = useState(["","","","","","","","",""])
  const [go, setGo] = useState("circle")
  const [winningMessage, setWinningMessage] = useState("");


  useEffect(()=>{
    winningCombos.forEach((combo) => {
      const circleWins = combo.every((cell) => cells[cell] === "circle");
      const corssWins  = combo.every((cell) => cells[cell] === "cross");

      if(circleWins){
        setWinningMessage("circle wins")

      }else if(corssWins){
        setWinningMessage("cross wins")

      }else {
        // setWinningMessage("it is a drow")

      }

    })

    
  }, [cells] )



useEffect(()=> {
  
  if(cells.every((cell) => cell !== "") && !winningMessage){
    setWinningMessage("Draw!")
  }

}, [cells, winningMessage])


  return (
    <div className="container">
        <div className="gameboard">
          {cells.map((cell, index)=>(
            <Cell  
              id={index} 
              key={index} 
              go={go} 
              setGo={setGo} 
              cells={cells} 
              setCells={setCells} 
              cell = {cell}
              winningMessage={winningMessage}
              />
          ))}
        </div>

        { !winningMessage && <div>{`It is now ${go} turn`}</div> }
        <div>{winningMessage}</div>
    </div>
  );
}
