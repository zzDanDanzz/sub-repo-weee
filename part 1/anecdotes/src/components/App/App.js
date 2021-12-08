import React, { useState } from 'react'
import Quotes from '../Quote/Quotes'
import Button from '../Quote/Button'
import TopQuotes from '../TopQuote/TopQuote'

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]


  const generateRand = () => anecdotes[ Math.floor(Math.random() * anecdotes.length) ]

  const [randQuote, setRandQuote] = useState(generateRand)
  const [likes, setLikes] = useState(new Array(anecdotes.length).fill(0))
  const [mostLiked, setMostLiked] = useState('')


  const addLike = () => {
    const newLikes = [...likes]
    newLikes[anecdotes.indexOf(randQuote)]++
    setMostLiked(anecdotes[newLikes.indexOf(Math.max(...newLikes))])
    setLikes(newLikes)
  }

  return (
    <div>
      <Quotes randQuote={randQuote} onClick={() => setRandQuote(generateRand)}/>
      <Button onClick={addLike} text={"LIKE!!"} />
      <p>Likes: {likes[ anecdotes.indexOf(randQuote) ]}</p>
      <TopQuotes mostLiked={mostLiked} likes={likes} />
    </div>
  )
}

export default App
