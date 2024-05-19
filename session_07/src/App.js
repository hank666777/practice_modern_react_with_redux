import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3001/books")
      setBooks(response.data);
    } catch (e) {
      console.error(e);
    }
  }
  // DONT DO THIS
  // fetchBooks();
  
  useEffect(() => {
    fetchBooks()
  }, []);

  const editBookById = async (id, newTitle) => {
    try {
      const response = await axios.put(`http://localhost:3001/books/${id}`, {
        title: newTitle,
      })
      const updatedBooks = books.map(book => {
        if (book.id === id) {
          return {...book, ...response.data};
        }
        return book;
      })
      setBooks(updatedBooks)
    } catch (e) {
      console.error(e);
    }
  }
  const deleteBookById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`)

    const updatedBooks = books.filter(book =>
      book.id !== id
    );
    setBooks(updatedBooks)
  }

  const createBook = async (title) => {
    try {
      const response = await axios.post('http://localhost:3001/books', {
        title
      })
      if (response.status >= 200 && response.status < 300) {
        const updatedBooked = [
          ...books,
          response.data
        ]
        setBooks(updatedBooked)
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App;