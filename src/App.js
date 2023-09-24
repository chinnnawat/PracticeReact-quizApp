import './App.css';
import Menu from "../src/components/Menu"
import Score from "../src/components/Score"
import Quiz from "../src/components/Quiz"
import { createContext, useState } from 'react';

export const DataContext = createContext()

function App() {
  const [appState,setAppState] = useState("menu")
  const [score,setScore] = useState(0)
  return (
    <DataContext.Provider value={{appState,setAppState,score,setScore}}>
      <div className="App">
        <h1>Quiz Game</h1>
        {appState === "menu" && <Menu/>}
        {appState === "score" && <Score/>}
        {appState === "quiz" && <Quiz/>}
      </div>
    </DataContext.Provider>
  );
}

export default App;
