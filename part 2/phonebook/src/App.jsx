import React, { useEffect, useState } from "react";
import ContactsDB from "./ContactsDB";
import Display from "./components/Display/Display";
import Form from "./components/Form/Form";
import Search from "./components/Search/Search";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filterTerm, setFilter] = useState('')

  useEffect(() => {
    ContactsDB.getAll().then((receivedContacts) => {
      setContacts(receivedContacts);
    });
  }, []);

  return (
    <>
    <h2>Phonebook</h2>
     <Search setFilter={setFilter} />
     <Form contacts={contacts} setContacts={setContacts}/>
     <Display contacts={contacts} setContacts={setContacts} filterTerm={filterTerm} />
    </>
  );
}

export default App;
