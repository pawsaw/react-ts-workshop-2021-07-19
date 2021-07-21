import React from 'react';
import { useParams } from 'react-router';
import { useBook } from '../../domain/books';
import { BookDetail } from './BookDetail/BookDetail';

export interface BookDetailScreenParams {
  isbn: string;
}

export const BookDetailScreen: React.FC = () => {

  const { isbn } = useParams<BookDetailScreenParams>();
  const book = useBook(isbn);

  return book ? <BookDetail book={book} /> : <span>Loading...</span>
};