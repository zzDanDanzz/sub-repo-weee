import ContactsDB from "../../ContactsDB";

const DelBtn = ({ id, contacts, setContacts }) => {
  const delContact = () => {
     ContactsDB.delContact(id).then(() => {
        const updatedContacts = contacts.filter(contact => contact.id !== id)
        setContacts(updatedContacts)
     })
  };
  return (
    <>
      <button onClick={delContact}>Delete</button>
    </>
  );
};

export default DelBtn;
