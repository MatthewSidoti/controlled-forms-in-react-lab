import { useState } from 'react';

const Bookshelf = () => {
  // 2. Define initial state
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBook, setNewBook] = useState({ title: '', author: '' });

  // 3. Create event handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '' }); 
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        {/* 4. Create the form */}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title: </label>
            <input
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
              placeholder="Enter book title"
            />
          </div>
          <div>
            <label>Author: </label>
            <input
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
              placeholder="Enter author"
            />
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>

      {/* 5. Map through books and display */}
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
