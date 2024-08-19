import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="py-[100px] ">
      <div className="text-center mb-9">
        <h3 className="font-play font-bold text-[40px] text-color-2">Books</h3>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {books.map(book => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
