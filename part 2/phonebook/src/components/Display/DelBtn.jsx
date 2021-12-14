import ContactsDB from "../../ContactsDB";

const DelBtn = ({ id, contacts, setContacts, setMsg }) => {
  const delContact = () => {
    ContactsDB.delContact(id).then(() => {
      let oldContactName = "";
      const updatedContacts = contacts.filter((contact) => {
        if (contact.id !== id) return true;
        else {
          oldContactName = contact.name;
          return false;
        }
      });
      setContacts(updatedContacts);
      const msg = {
        text: `${oldContactName}'s number has been deleted`,
        type: "warn",
      };
      setMsg(msg);
    });
  };
  return (
    <>
      <button onClick={delContact}>Delete</button>
    </>
  );
};

export default DelBtn;
