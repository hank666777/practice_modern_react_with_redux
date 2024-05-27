interface Book {
  title: string;
}

async function fetchBooks() {
  const res = await fetch("/api/books");
  const data = await res.json();
  return data as Book;
}

// async function fetchBooks2() {
//   const res = await fetch("/api/books");
//   const data: unknown = await res.json();
//
//   if (
//     data &&
//     typeof data === 'object' &&
//     'title' in data &&
//     typeof data.title === 'string'
//   ) {
//     return data as Book;
//   }
//
//   throw new Error('Expected to get a book, but didnt');
// }