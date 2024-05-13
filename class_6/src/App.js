import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [book, setBook] = useState([]);
  const deleteBookById = (id) => {
    const updateBooks = book.filter(book =>
      book.id !== id
    );
    setBook(updateBooks)
  }

  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      {id : Math.round(Math.random() * 9999), titie}
    ]
    setBooks(books)

    console.log('need to add book with:', title);
  }

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App;