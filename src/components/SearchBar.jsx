const SearchBar = () => {
  return (
    <div className="flex align-items-center grow1">
      <img 
        className="medium-img" 
        src="src/assets/search.svg" 
        alt="search" />
      <input type="text" />
    </div>
  )
}

export default SearchBar