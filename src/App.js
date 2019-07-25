//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [ homeTeam, homeScore ] = useState(0);
  const [ awayTeam, awayScore ] = useState(0);
  const [ counter, setCounter ] = useState(0);

  const handleHomeTD = () => homeScore(homeTeam + 7)
  const handleHomeFG = () => homeScore(homeTeam + 3)

  const handleAwayTD = () => awayScore(awayTeam + 7)
  const handleAwayFG = () => awayScore(awayTeam + 3)

  const [ home, setHome ] = useState('');
  const [ away, setAway ] = useState('');

  const handleReset = () => {
    setHome('');
    setAway('');
    homeScore(0);
    awayScore(0);
    setCounter(0);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{home}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeTeam}</div>
          </div>
          <div className="timer" >{counter}</div>
          <div className="away">
            <h2 className="away__name">{away}</h2>
            <div className="away__score">{awayTeam}</div>
          </div>
        </div>
        <BottomRow prop={}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={handleHomeTD}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={handleHomeFG}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={handleAwayTD}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={handleAwayFG}>Away Field Goal</button>
        </div>
        <div className="gameButtons">
          <button className="gameButtons__reset" onClick={handleReset}>Reset</button>
        </div>
        <div className="players">
          <label>Set Home Team</label>
          <input type="text" placeholder="Set Home Team" onChange={e => setHome(e.target.value)}/>
          <label>Set Away Team</label>
          <input type="text" placeholder="Set Away Team" onChange={e => setAway(e.target.value)}/>
        </div>
      </section>
    </div>
  );
}

export default App;
