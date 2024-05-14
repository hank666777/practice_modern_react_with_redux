import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handelDeleteClick = () => {
    onDelete(book.id);
  }
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  }
  // bed
  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
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