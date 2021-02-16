// Globals
import "./styles.scss";
import React, { useState, useEffect } from "react";

// Components
import { Button } from "../../components/Button";

// Sub-component
function Expired() {
  return (
    <div className="aura-expired">
      <div className="aura-expired-emoji">⚠️</div>
      <div className="aura-expired-text">Timer expired!</div>
    </div>
  );
}

// Component
function Timer() {
  // Hooks - state
  const [startTimer, setStartTimer] = useState(false);
  const [counter, setCounter] = useState(0);

  // TODO: implement counter...
  let StartTimer = () => {
    setStartTimer(true);
  }
  let ResetTimer = () => {
    setCounter(0);
    setStartTimer(false);
  }

  let TimerOutput = (currTimer) => {
    let hrs = 0;
    let min = 0;

    if(currTimer % 60 === 0)
    {
      min += 1;
    }
    if(min % 60 === 0){
      hrs += 1;
    }
  
    return hrs === 0 ? `${min}:${currTimer}` : `${hrs}:${min}:${currTimer}`;
  }

  useEffect (() => {
    if(startTimer){
      let currCount = counter;
      setCounter(currCount++);
    }
  });

  // Render
  return (
    <div className="aura-page aura-timer">
      <h1>Timer</h1>

      <div className="aura-page-content">
        <div className="aura-timer-clock">{TimerOutput(counter)}</div>
        {counter <= 0 ? <Expired /> : null}

        <div className="aura-timer-buttons">
          <Button onclick={StartTimer}>Start</Button>
          <Button onclick={ResetTimer}>Reset</Button>
        </div>
      </div>
    </div>
  );
}

export { Timer };
