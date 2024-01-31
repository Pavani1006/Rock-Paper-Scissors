import React , {useState,useEffect} from 'react'
import './App.css';

function App() {
    const [userScore,setUserScore] = useState(0)
    const [computerScore,setComputerScore] = useState(0)
    const [userChoice,setUserChoice] = useState('rock')
    const [computerChoice,setComputerChoice] = useState('rock')
    const [result,setResult] = useState('Let\'s see who wins..')
    const [gameEnd,setGameEnd] = useState(false)
    const [blank,setBlank] =useState(false)
    const choices=['rock' , 'paper' , 'scissors']
    const handleChoice=(choice)=>{
      setUserChoice(choice)
      generateComputerChoice()
    }

    const generateComputerChoice=()=>{
      const randomChoice=Math.floor(Math.random()*choices.length)
      setComputerChoice(choices[randomChoice])
    }

    const reset=()=>{
      window.location.reload()
    }

    useEffect(()=>{
      const resultMoves=userChoice+computerChoice
      if (userScore<=4 && computerScore<=4) 
      {
        if (resultMoves==='rockscissors' || resultMoves==='paperrock' || resultMoves==='scissorspaper')
        { 
          const updatedUserScore= userScore+1
          setUserScore(updatedUserScore)
          if (updatedUserScore === 5){
            setGameEnd(true)
            setBlank(true)
            setResult('User wins..')
          }
        }
        if (resultMoves==='paperscissors' || resultMoves==='scissorsrock' || resultMoves==='rockpaper')
        {
          const updatedComputerScore=computerScore+1
          setComputerScore(updatedComputerScore)
          if (updatedComputerScore === 5){
            setGameEnd(true)
            setBlank(true)
            setResult('Computer wins..')
          }
        }
      }
    },[userChoice,computerChoice]);
    return (
      <div className='App'>
        <div className='container'>
          <h1 className='heading'>Rock Paper Scissors</h1>
          <div className='points'>
            <h1>User score - {userScore}</h1>
            <h1>System score - {computerScore}</h1>
          </div>
          <div className='choice'>
            <div className='userhand'>
              <img className='userimg' src={`../images/${userChoice}.jpeg`} alt='userhand'/>
            </div>
            <div className='computerhand'>
              <img className='compimg' src={`../images/${computerChoice}.jpeg`} alt='computerhand'/>
            </div>
          </div>
          <div className='buttongrp'>
            {choices.map((choice,index)=>
              <button className='button' key={index} onClick={()=>handleChoice(choice)} disabled={gameEnd}>{choice}</button>
            )}
          </div>
          <div className='result'>
            <h1>Final Result: {result}</h1>
          </div>
          <div className='btn'>
            {
               gameEnd && <button className='button' onClick={()=> reset()}>Restart the game</button>
            }
          </div>
        </div>
      </div>
  );
}

export default App;
