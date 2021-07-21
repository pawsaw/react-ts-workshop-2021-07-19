import React from 'react'
import { Book } from '../../domain/books'
import { noop } from '../../util/noop';
import { BookListItem, OnBookListItemClicked } from './BookListItem'

export type OnBookSelected = OnBookListItemClicked;

export interface BookListProps {
  books?: Book[];
  onBookSelected?: OnBookListItemClicked;
}

export const BookList: React.FC<BookListProps> = ({ books = [], onBookSelected = noop }) => {

  return <div>
    {
      books.map(book => <BookListItem key={book.isbn} book={book} onBookListItemClicked={onBookSelected} />)
    }
  </div>
}
