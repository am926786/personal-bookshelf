// src/components/BookSearch.js
import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const BookSearch = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const searchBooks = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
    setBooks(response.data.docs);
  };

  return (
    <div>
      <form onSubmit={searchBooks}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search for books" 
        />
        <button type="submit">Search</button>
      </form>
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
