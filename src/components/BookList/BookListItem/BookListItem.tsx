import React from 'react'
import { Book } from '../../../domain/books'
import { noop } from '../../../util/noop'

export interface OnBookListItemClicked {
  (book: Book): void;
}

export interface BookListItemProps {
  book: Book;
  onBookListItemClicked?: OnBookListItemClicked;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book, onBookListItemClicked = noop }) => {

  return <div onClick={() =>  onBookListItemClicked(book)}>
    <span>{book.isbn}</span> - {book.title}
  </div>
}
