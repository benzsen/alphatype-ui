
const Timer = ({start, now, localScore}) => {
  const liveScore = (now-start)/1000

  const timerState = () =>{
    if (!start){
      return <h3>Game starts when typing begins</h3>
    }
    else if (!localScore){
      return <h3><b>Timer:</b> {liveScore.toFixed(3)}s</h3>
    }
    return <h3><b>Your alphaTime is:</b> {localScore}s !</h3>
  }
  
  return(
    <div className="timer">
      {timerState()}
    </div>
  )
    
  }

export default Timer 