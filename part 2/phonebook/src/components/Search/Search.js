const Search = ({onSearch}) => {
    return (
        <>
            <h2>Search</h2>
            <div>
                <span>Filter: <input type="text" onChange={onSearch} /> </span>
            </div>
        </>
    )
}
export default Search