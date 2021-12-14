import DelBtn from "./DelBtn";
import tools from "../../tools";

const Display = ({ contacts, setContacts, filterTerm }) => {
  const filteredContacts = tools.filter(contacts, filterTerm);
  return (
    <>
      <h3>Contacts</h3>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} : {contact.number} <DelBtn key={contact.id} id={contact.id} contacts={contacts} setContacts={setContacts}/>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Display;
