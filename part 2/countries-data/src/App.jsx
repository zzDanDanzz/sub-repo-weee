import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Display from './components/Display';


function App() {
  const URL = "https://restcountries.com/v3.1/all"

  const [COUNTRIES, setCOUNTRIES] = useState([])

  // this will make sure user doesn't type before fetch is done
  const [isDisabled, setIsDisabled] = useState(true)

  const RULES = { NO_MATCH: 0, ONE_MATCH: 1, LESS_THAN_TEN: 2, TOO_MANY: 3, BLANK: 4 }

  const [displayRule, setDisplayRule] = useState(RULES.BLANK)

  const [matches, setMatches] = useState([])

  // fetch countries array after initial render
  useEffect(() => {
    axios
      .get(URL)
      .then(response => {
        setCOUNTRIES(response.data)
        setIsDisabled(false)
      })
  }, [])


  const onChange = (ev) => {

    let input = ev.target.value.trim().toLowerCase()

    // if empty, do nothing
    if (input === "") {
      setDisplayRule(RULES.BLANK)
      return
    }

    // else start comparing input w countries arr and push matches to matched
    const matched = []

    for (const cnt of COUNTRIES) {
      if (cnt.name.official.toLowerCase().includes(input)) {
        if (matched.length > 10) {
          setDisplayRule(RULES.TOO_MANY)
          return
        }
        matched.push(cnt)
      }
    }

    // set a rule for display according to number of matches
    if (matched.length <= 10 && matched.length > 1) {
      setDisplayRule(RULES.LESS_THAN_TEN)
    }
    else if (matched.length === 1) {
      setDisplayRule(RULES.ONE_MATCH)
    }
    else if (matched.length === 0) {
      setDisplayRule(RULES.NO_MATCH)
    }

    setMatches(matched)
  }

  return (
    <>
      <span>Filter: </span>
      <input type="text" disabled={isDisabled} onChange={onChange} />
      <Display displayRule={displayRule} matches={matches} RULES={RULES} />
    </>
  );
}

export default App;
