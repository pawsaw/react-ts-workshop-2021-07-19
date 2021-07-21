import React from 'react';
import { Book } from '../../../domain/books';

export interface BookDetailProps {
  book: Book;
}

export const BookDetail: React.FC<BookDetailProps> = ({ book }) => {

  return <div>
    {
      book ? <div>
        isbn: {book.isbn}<br />
        title: {book.title ?? '-'}<br />
        subtitle: {book.subtitle ?? '-'}<br />
      </div> : <span>Loading book...</span>
    }
  </div>

};