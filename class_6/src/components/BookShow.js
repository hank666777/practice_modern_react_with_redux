function BookShow({ book, onDelete }) {
  const handelClick = () => {
    onDelete(book.id);
  }
  return (
    <div className="book-show">
      {book.title}
      <div className="actions">
        <button className="delete" onClick={handelClick}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow;