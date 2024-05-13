import BookShow from "./BookShow";

function BookList({ books, onDelete }) {
  const renderedBooks = books.map((book) => {
    return <BookShow book={book} key={book.id} delete={onDelete} />
  })
  return (
    <div className="book-list">{renderedBooks}</div>
  )
}

export default BookList;