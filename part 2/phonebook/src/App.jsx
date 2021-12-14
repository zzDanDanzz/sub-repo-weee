import React, { useEffect, useState } from "react";
import ContactsDB from "./ContactsDB";
import Display from "./components/Display/Display";
import Form from "./components/Form/Form";
import Search from "./components/Search/Search";
import Message from "./components/Message/Message";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filterTerm, setFilter] = useState('')
  const [msg, setMsg] = useState({text: null, type: ''})

  useEffect(() => {
    ContactsDB.getAll().then((receivedContacts) => {
      setContacts(receivedContacts);
    });
  }, []);

  return (
    <>
    <h2>Phonebook</h2>
     <Message msg={msg} setMsg={setMsg} />
     <Search setFilter={setFilter} />
     <Form contacts={contacts} setContacts={setContacts} setMsg={setMsg} />
     <Display contacts={contacts} setContacts={setContacts} filterTerm={filterTerm} setMsg={setMsg}/>
    </>
  );
}

export default App;
