import { useState } from 'react';

<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    {/* Form will go here */}
  </div>
  <div className="bookCardsDiv">{/* Book cards will display here */}</div>
</div>


const [books, setBooks] = useState([]);

const [newBook, setNewBook] = useState([title: '', author: '']);

//form inputs
const handleInputChange = (event) => {
  const { name, value } = event.target;
  setNewBook({
    ...newBook,
    [name]: value,
  });
};

//form submission