import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    // If these 2 references are looking
    //  at the exact same array or object in memory,
    //  React assumes no re-render is required!
    books.push({id: 0, title: title});
    setBooks(books)


    console.log('need to add book with:', title);
  }

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App;