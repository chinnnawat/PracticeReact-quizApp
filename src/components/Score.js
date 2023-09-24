import React, { useContext, useState } from "react";
import { DataContext } from "../App";
import QuestionsData from "../data/QuestionsData";

const Score =()=>{
    const{score,setAppState,setScore} = useContext(DataContext)
const restart =()=>{
    setAppState("menu")
    setScore(0)
}

    return(
        <div className="score">
            <h1>Your Score</h1>
            <h1>{score} / {QuestionsData.length}</h1>
            <button onClick={restart}>Do Again</button>
        </div>
    )
}
export default Score