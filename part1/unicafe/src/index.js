import React, { useState } from 'react'
import ReactDOM from 'react-dom'    

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  );
}
const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad;
  let average = (good + bad * (-1)) / all;
  let positive = (good / all) * 100 +'%';
  
  if ((good || neutral || bad) !== 0) {
    return (
  <div>
    <table>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} extra={'%'}/> 
          </table>
     </div>
    )
  }
  return <div>No feedback given</div>
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);
  
  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" onClickButton={handleGood} />
      <Button text="neutral" onClickButton={handleNeutral} />
      <Button text="bad" onClickButton={handleBad} />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
const Button = ({ text, onClickButton }) => {
  return (
    <button onClick={onClickButton}>{text}</button>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))