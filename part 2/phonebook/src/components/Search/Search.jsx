const Search = ({ setFilter }) => {
    const filterStuff = (event) => {
        const input = event.target.value.trim()
        setFilter(input)
    }

  return (
    <>
      <label>Filter contacts:</label><input type="text" onChange={filterStuff} />
    </>
  );
};
export default Search;
