import React, { useState } from 'react';
import Search from '../Search/Search';
import Form from '../Form/Form';
import DisplayNums from '../DisplayNums/DisplayNums';

function App() {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [toDisplay, setToDisplay] = useState(persons)

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
