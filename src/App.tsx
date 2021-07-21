import { useState } from 'react';
import './App.css';
import { BookDetail } from './components/BookDetail';
import { BookList, OnBookSelected } from './components/BookList';
import { Book, useBooks } from './domain/books';

function App() {

  const books = useBooks();
  const [book, setBook] = useState<Book | null>(null);

  const onBookSelected: OnBookSelected = (book: Book) => {
    setBook(book);
  }

  return <div className="App">
    {books ? (
      <>
        <BookList books={books} onBookSelected={onBookSelected} />
          {book ? (
            <>
              <BookDetail book={book} />
            </>
          ) : (
            <div>No Book selected</div>
          )}
      </>
    ) : <span>Loading books...</span>}

  </div>
}


export default App;
