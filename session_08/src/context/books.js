import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3001/books")
      setBooks(response.data);
    } catch (e) {
      console.error(e);
    }
  }
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
    await axios.delete(`http://localhost:3001/books/${id}`)
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

  // Making sure that I got all my function names correct
  const valueToShare = {
    books,
    editBookById,
    deleteBookById,
    createBook,
    fetchBooks
  }

  return (
    <BooksContext.Provider value={ valueToShare }>
      {children}
    </BooksContext.Provider>
  )
}

export {Provider};
export default BooksContext;

// import BooksContext, { Provider } from './whatever';