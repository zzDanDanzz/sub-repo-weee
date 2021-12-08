import React from 'react';
import {useState} from 'react'
import Feedback from '../Feedback/Feedback'
import Statistics from '../Statistics/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const values = {good: good, bad: bad, neutral: neutral}

  return (
    <>
      <Feedback setGood={setGood} setNeutral={setNeutral} setBad={setBad} values={values}/>
      <Statistics values={values}/>
    </>
  )

}

export default App
