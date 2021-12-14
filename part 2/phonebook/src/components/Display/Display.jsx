import DelBtn from "./DelBtn";
import tools from "../../tools";

const Display = ({ contacts, setContacts, filterTerm, setMsg }) => {
  const filteredContacts = tools.includesFilter(contacts, filterTerm);
  return (
    <>
      <h3>Contacts</h3>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} : {contact.number} <DelBtn key={contact.id} id={contact.id} contacts={contacts} setContacts={setContacts} setMsg={setMsg}/>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Display;
