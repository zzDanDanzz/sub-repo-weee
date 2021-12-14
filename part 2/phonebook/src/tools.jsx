/* eslint-disable import/no-anonymous-default-export */
const filter = (contacts, filterTerm, CASE_SENSITIVE = false) => {
  if (CASE_SENSITIVE === true) {
    return contacts.filter((contact) => {
      if (!filterTerm) return contact;
      if (contact.name.includes(filterTerm))
        return contact;
      else return false;
    });
  } else {
    return contacts.filter((contact) => {
      if (!filterTerm) return contact;
      if (contact.name.toLowerCase().includes(filterTerm.toLowerCase()))
        return contact;
      else return false;
    });
  }
};

export default { filter };
