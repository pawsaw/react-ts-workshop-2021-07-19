import { useState, useEffect } from 'react';
import { Book } from './Book'

export const useBooks = (): Book[] | null => {
  const [books, setBooks] = useState<Book[] | null>(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:4730/books`);
      const _books: Book[] = await response.json();
      setBooks(_books);
    })();
  }, []);

  return books;
}