import { useState } from "react";
import "./App.css";

const GuessNo=()=>{
    
    const [guess, setGuess] = useState("");
    const [score, setScore] = useState(20);
    const [highscore, setHighscore] = useState(0);
    const [message, setMessage] = useState("Start guessing...");
    const [number, setNumber] = useState("?");
    const [randomNo, setRandomNo] = useState(Math.trunc(Math.random()*20)+1);
    const [bgColor, setBgColor] = useState("#222")

    const checkBtn=()=>{
        const guessNum = Number(guess);
        if(guessNum===randomNo){
            setBgColor("green")
            setMessage("...Correct")
            setNumber(randomNo);
            if(score>highscore){
                setHighscore(score);
            }
        }
        else if(guessNum>randomNo){
            setMessage("...Too High");
            setScore(score-1);
        }
        else if(guessNum<randomNo){
            setMessage("...Too Low");
            setScore(score-1);
        }
    };

    const againBtn=()=>{
        setRandomNo(Math.trunc(Math.random()*20)+1);
        setBgColor("#222")
        setScore(20);
        setMessage("Start guessing...");
        setNumber("?");
        setGuess("");
    };

    return (
        <div className="App" style={{backgroundColor: bgColor}}>
            <header>
      <h1>Guess My Number!</h1>
      <p className="between">(Between 1 and 20)</p>
      <button className="btn again" onClick={againBtn}>Again!</button>
      <div className="number">{number}</div>
    </header>
    <main>
      <section className="left">
        <input type="number" className="guess" value={guess} onChange={(e)=> setGuess(e.target.value)} />
        <button className="btn check" onClick={checkBtn}>Check!</button>
      </section>
      <section className="right">
        <p className="message">{message}</p>
        <p className="label-score">💯 Score: <span className="score">{score}</span></p>
        <p className="label-highscore">
          🥇 Highscore:{" "} <span className="highscore">{highscore}</span>
        </p>
      </section>
    </main>
        </div>
    )
}

export default GuessNo;