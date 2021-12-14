import ContactsDB from "../../ContactsDB";
import tools from "../../tools";

const Form = ({ contacts, setContacts }) => {
  const checkEntry = (event) => {
    event.preventDefault();
    const newName = event.target["name"].value;
    const newNumber = event.target["number"].value;

    const requiredWarn = "You must give both a name and a number";

    if (!newNumber || !newName) {
      return alert(requiredWarn);
    }

    const confirmPrompt = `${newName} already exists, would you like to replace the old number?`;

    if (tools.filter(contacts, newName, true).length !== 0) {
      if (!window.confirm(confirmPrompt)) return;
      const [id] = contacts
        .filter((contact) => contact.name === newName)
        .map((contact) => contact.id);
      ContactsDB.editContact(id, newName, newNumber).then((newContact) => {
        const updatedContacts = contacts.map((contact) =>
          contact.id !== id ? contact : newContact
        );
        setContacts(updatedContacts);
      });
    } else {
      ContactsDB.addContact(newName, newNumber).then((newContact) => {
        setContacts(contacts.concat(newContact));
      });
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
