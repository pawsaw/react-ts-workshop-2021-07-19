import React, { useState } from 'react';
import { useBooks, Book } from '../../domain/books';
import { BookDetail } from '../BookDetailScreen/BookDetail';
import { OnBookSelected, BookList } from './BookList';

export const BooksScreen: React.FC = () => {
  const books = useBooks();
  const [book, setBook] = useState<Book | null>(null);

  const onBookSelected: OnBookSelected = (book: Book) => {
    setBook(book);
  }

  return <div>
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
};
