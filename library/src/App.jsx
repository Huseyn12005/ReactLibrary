import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState({ name: '', author: '', genre: '', pages: '' });
  const [newBook, setNewBook] = useState({ name: '', author: '', genre: '', year: '', pages: '' });

  const handleAddBook = () => {
    setBooks([...books, newBook]);
    setNewBook({ name: '', author: '', genre: '', year: '', pages: '' });
  };

  const handleDeleteBook = (index) => {
    const newBooks = books.filter((_, i) => i !== index);
    setBooks(newBooks);
  };

  const handleUpdateBook = (index, updatedBook) => {
    const newBooks = books.map((book, i) => (i === index ? updatedBook : book));
    setBooks(newBooks);
  };

  const handleSearch = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const filteredBooks = books.filter((book) =>
    book.name.includes(search.name) &&
    book.author.includes(search.author) &&
    book.genre.includes(search.genre) &&
     book.pages.includes(search.pages)
  );

  return (
    <div className="App">
      <h1>Library App</h1>

      <div>
        <h2>Add Book</h2>
        <input
          type="text"
          placeholder="Name"
          value={newBook.name}
          onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <input
          type="text"
          placeholder="Genre"
          value={newBook.genre}
          onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
        />
        <input
          type="number"
          placeholder="Year"
          value={newBook.year}
          onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
        />
        <input
          type="number"
          placeholder="Pages"
          value={newBook.pages}
          onChange={(e) => setNewBook({ ...newBook, pages: e.target.value })}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>

      <div>
        <h2>Search Books</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={search.name}
          onChange={handleSearch}
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          value={search.author}
          onChange={handleSearch}
        />
        <input
          type="text"
          placeholder="Genre"
          name="genre"
          value={search.genre}
          onChange={handleSearch}
        />
        <input
          type="number"
          placeholder="Pages"
          name="pages"
          value={search.pages}
          onChange={handleSearch}
        />
      </div>

      <div>
        <h2>Books List</h2>
        <ul>
          {filteredBooks.map((book, index) => (
            <li key={index}>
              <span>Name: {book.name} Author: {book.author} Genre: {book.genre}, Year: {book.year}, Pages: {book.pages}</span>
              <button onClick={() => handleDeleteBook(index)}>Delete</button>
              <button onClick={() => {
                const updatedBook = { ...book, name: prompt('Update Name', book.name) };
                handleUpdateBook(index, updatedBook);
              }}>Update</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
