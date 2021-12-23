import ContactsDB from "../../ContactsDB";
import tools from "../../tools";

const Form = ({ contacts, setContacts, setMsg }) => {
  const checkEntry = (event) => {
    event.preventDefault();
    const newName = event.target["name"].value.trim();
    const newNumber = event.target["number"].value.trim();

    const requiredWarn = "You must give both a name and a number";

    if (!newNumber || !newName) {
      setMsg({text: requiredWarn, type: 'warn'})
      return 
    }

    const confirmPrompt = `${newName} already exists, would you like to replace the old number?`;

    if (tools.isSameAsFilter(contacts, newName).length !== 0) {
      if (!window.confirm(confirmPrompt)) return;
      const [id] = contacts
        .filter((contact) => contact.name === newName)
        .map((contact) => contact.id);
      ContactsDB.editContact(id, newNumber)
        .then((newContact) => {
          const updatedContacts = contacts.map((contact) =>
            contact.id !== id ? contact : newContact
          );
          setContacts(updatedContacts);
          const msg = { text: `${newName}'s number updated`, type: "info" };
          setMsg(msg);
        })
        .catch((err) => {
          const msg = { text: `contact "${newName}" has already been deleted `, type: "warn" };
          setMsg(msg);
        });
    } else {
      ContactsDB.addContact(newName, newNumber).then((newContact) => {
        setContacts(contacts.concat(newContact));
        const msg = { text: `${newName} added to contacts`, type: "success" };
        setMsg(msg);
      }).catch(err => {
        const msg = { text: err.response.data.error, type: "warn" };
        setMsg(msg); 
      })
    }

    event.target["name"].value = "";
    event.target["number"].value = "";
  };

  return (
    <>
      <h3>Add contact:</h3>
      <form onSubmit={checkEntry}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Number: </label>
          <input type="text" name="number" />
        </div>
        <button>Add</button>
      </form>
    </>
  );
};

export default Form;
