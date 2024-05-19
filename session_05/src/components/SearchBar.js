import { useState } from "react";
import './SearchBar.css';

function SearchBar({ onSubmit }) {
  // step 1
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  }
  // step 3: get the value from the event
  const handleChange = (event) => {
    // step 4: update state
    setTerm(event.target.value);
  }
  return (
    <div className="search-bar">
      <form id="search-bar" onSubmit={handleFormSubmit}>
        <label>Enter Search</label>
        {/* step 2: create an event handler to watch for 'onChange' event (onChange={handleChange})*/}
        {/* step 5: pass your state to the input as the value app (value={term})*/}
        <input onChange={handleChange} value={term} placeholder="text" />
      </form>
    </div>
  )
}

export default SearchBar;