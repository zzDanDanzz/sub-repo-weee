import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Search from '../Search/Search';
import Form from '../Form/Form';
import DisplayNums from '../DisplayNums/DisplayNums';

function App() {

  const [persons, setPersons] = useState([])

  const [toDisplay, setToDisplay] = useState(persons)

  useEffect(() => {
    axios
      .get("http://localhost:3001/db")
      .then(response => {
        setPersons(response.data.persons)
        setToDisplay(response.data.persons)
      })
  }, [])



  const addNumber = (ev) => {
    ev.preventDefault()
    let newName = ev.target["name"].value.trim()
    let newNumber = ev.target["num"].value

    if (newName === "" || newNumber === "") {
      alert(`Please fill in the required fields.`)
      return
    }

    let isUnique = persons.every(pers => newName.toLowerCase() !== pers.name.toLowerCase())

    if (!isUnique) {
      alert(`${newName} is already in your phonebook!`)
      return
    } else {
      const newPersons = persons.concat({ name: newName, number: newNumber })
      setPersons(newPersons)
      setToDisplay(newPersons)
      ev.target["name"].value = ""
      ev.target["num"].value = ""
    }
  }

  const onSearch = (ev) => {
    let searchTerm = ev.target.value.trim().toLowerCase()
    if (searchTerm === "") {
      setToDisplay(persons)
    } else {
      let filtered = persons.filter(pers => pers.name.toLowerCase().includes(searchTerm))
      setToDisplay(filtered)
    }
  }

  return (
    <>
      <Search onSearch={onSearch} />
      <Form onSubmit={addNumber} />
      <DisplayNums persons={toDisplay} />
    </>
  );
}

export default App;
