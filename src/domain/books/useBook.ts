import { useState, useEffect } from 'react';
import { Book, ISBN } from './Book'

export const useBook = (isbn: ISBN): Book | null => {
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:4730/books/${isbn}`);
      const _book: Book = await response.json();
      setBook(_book);
    })();
  }, [isbn]);

  return book;
}