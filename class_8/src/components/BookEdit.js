import { useState } from "react";
import useBookContext from "../hooks/use-books-comtext";

function BookEdit({ book, onSubmit }) {
  const { editBookById } = useBookContext();
  const [title, setTitle] = useState(book.title);

  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit()
    editBookById(book.id, title)
  }

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <input className="input" value={title} onChange={handleChange}/>
      <button className="button is-primary">Save</button>
    </form>
  )
}

export default BookEdit;