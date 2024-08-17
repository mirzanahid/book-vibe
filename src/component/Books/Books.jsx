import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="py-120px">
      <div className="text-center">
        <h3 className="font-play font-bold text-[40px] text-color-2">Books</h3>
      </div>

      <div>{
        books.map(book => <Book book={book}></Book>)
        }</div>
    </div>
  );
};

export default Books;
