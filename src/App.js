import React, { useState } from 'react'
import './App.css'
import script from './components/StarWars'
import { Button, Jumbotron } from 'react-bootstrap'

function App() {
  const [ totalWords, setTotalWords ] = useState(80)

  // MARK: Define text objects
  let words = {}
  let newWord = ''

  // MARK: Get data

  // MARK: Iterate over words in list and place into new object
  for(const char of script) {
    if(char !== " ") {
      newWord += char.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\n 0-9]/g, "").toLowerCase()
    } else {
      if(newWord.length > 1) {
        if(words[newWord]) {
          words[newWord] += 1
        } else {
          words[newWord] = 1
        }
        newWord = ''
      }
    }
  }

  // MARK: Order words
  let sortedWords = Object.keys(words).sort(
    function(a, b) {
      return words[b] - words[a]
  })

  let items = []
  for(let i = 0; i < totalWords; i++) {
    items.push(<Button className="m-1" key={[i]} variant="primary">{sortedWords[i]}</Button>)
  }

  return (
    <div className="d-inline-flex align-items-center justify-content-center align-self-center bg-primary w-100">

      <span className="hover bg-light pt-1 pb-1">
        <Button className="btn btn-primary mr-1" variant="secondary" onClick={() => setTotalWords(totalWords + 1)}>+</Button>{' '}
        <Button className="btn btn-primary" variant="secondary" onClick={() => setTotalWords(totalWords - 1)}>-</Button>{' '}
      </span>

      <Jumbotron className="align-items-center align-self-center text-center">
        <h1>Most Used Words:</h1>
        <h2>Star Wars</h2>
        <br/>
        <p className="d-inline-flex w-75 flex-wrap justify">{items}</p>
      </Jumbotron>

    </div>
  )
}

export default App