import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle('')
  }

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input className="input" value={title} onChange={handleChange} name="title" />
        <br/>
        <button className="button" type="submit">Add Book</button>
      </form>
    </div>
  )
}

export default BookCreate;