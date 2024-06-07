// src/pages/SearchPage.js
import React, { useState } from 'react';
import BookSearch from '../components/BookSearch';

const SearchPage = () => {
  const [bookshelf, setBookshelf] = useState(
    JSON.parse(localStorage.getItem('bookshelf')) || []
  );

  const addToBookshelf = (book) => {
    const newBookshelf = [...bookshelf, book];
    setBookshelf(newBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
  };

  return (
    <div>
      <h1>Book Search</h1>
      <BookSearch addToBookshelf={addToBookshelf} />
      <a href="/bookshelf">Go to My Bookshelf</a>
    </div>
  );
};

export default SearchPage;
