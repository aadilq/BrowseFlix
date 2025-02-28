/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search-svg" />
        <input type="text" placeholder="Search through thousands of different movies!" 
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}/>

      </div>
    </div>
  )
}

export default Search

