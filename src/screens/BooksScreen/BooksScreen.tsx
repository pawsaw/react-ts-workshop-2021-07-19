import React from 'react';
import { useHistory } from 'react-router-dom';
import { useBooks, Book } from '../../domain/books';
import { OnBookSelected, BookList } from './BookList';

export const BooksScreen: React.FC = () => {
  const books = useBooks();
  const history = useHistory();

  const onBookSelected: OnBookSelected = (book: Book) => {
    history.push(`/books/${book.isbn}`);
  }

  return <div>
    {books ? (
      <>
        <BookList books={books} onBookSelected={onBookSelected} />
      </>
    ) : <span>Loading books...</span>}

  </div>
};
