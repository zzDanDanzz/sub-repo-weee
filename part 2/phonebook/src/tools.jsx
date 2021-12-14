/* eslint-disable import/no-anonymous-default-export */

// compares with === and is case sensitive
const isSameAsFilter = (contacts, filterTerm) => {
  return contacts.filter(
    (contact) => contact.name === filterTerm
  );
};

// uses .includes(<filter>) and is case insensitive
const includesFilter = (contacts, filterTerm) => {
  return contacts.filter((contact) => {
    if (!filterTerm) return contact;
    if (contact.name.toLowerCase().includes(filterTerm.toLowerCase()))
      return contact;
    else return false;
  });
};

export default { includesFilter, isSameAsFilter };
