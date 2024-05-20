import { useContext } from "react";
import BooksContext from "../context/books";

// custom Hooks
function useBookContext() {
  return useContext(BooksContext);
}

export default useBookContext;