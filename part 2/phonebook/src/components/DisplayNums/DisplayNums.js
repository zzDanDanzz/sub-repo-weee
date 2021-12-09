const DisplayNums = ({ persons }) => {
  return (
    <>
    <h2>Phonebook</h2>
    <ul>
      {persons.map((person) => (
          <li key={person.name}>
            {person.name} : {person.number}
          </li>
      ))}
      </ul>
    </>
  );
};
export default DisplayNums;
