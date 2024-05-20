import { useState } from "react";
import BookEdit from "./BookEdit";
import useBookContext from "../hooks/use-books-comtext";

function BookShow({ book }) {
  const { deleteBookById } = useBookContext();
  const [showEdit, setShowEdit] = useState(false);

  const handelDeleteClick = () => {
    deleteBookById(book.id);
  }
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  }

  const handleSubmit = () => {
    setShowEdit(false);
  }

  let content = <h3>{book.title}</h3>
  if (showEdit === true) {
    content = <BookEdit onSubmit={handleSubmit} book={book}/>
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="book" />
      <label>Title</label>
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>Edit</button>
        <button className="delete" onClick={handelDeleteClick}>Delete</button>
      </div>
    </div>
  )
}

export default BookShow;