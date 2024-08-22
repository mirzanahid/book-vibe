import { useLoaderData } from "react-router-dom";
import { getLocalHost } from "../../utilites/localstorage";
import BooksListItem from "../../component/BooksListItem/BooksListItem";
import Header from "../../component/Header/Header";
import { RiArrowDownSLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const ListedBooks = () => {
  const [readBooksList,setReadBooksList] = useState([])
  const [wishBooksList,setWishBooksList] = useState([])
  const bookList = useLoaderData();

  useEffect(() => {
    const readBooks = getLocalHost("read-books");
    const wishBooks = getLocalHost("wish-books");

    const readBooksListFilter = readBooks.map((id) =>
      bookList.find((book) => book.bookId === id)
    );
    setReadBooksList(readBooksListFilter)
    const wishBooksListFilter = wishBooks.map((id) =>
      bookList.find((book) => book.bookId === id)
    );
    setWishBooksList(wishBooksListFilter)
  }, [bookList]);

  return (
    <div>
      <Header></Header>
      <div className="flex justify-center mt-8 mb-14">
        <details className="dropdown">
          <summary className="btn m-1 bg-color-1 text-white font-work font-semibold text-lg">
            Sort By <RiArrowDownSLine />
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Published year</a>
            </li>
          </ul>
        </details>
      </div>
      <div role="tablist" className="tabs tabs-lifted mt-[32px]">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab font-work font-normal text-lg text-color-2 "
          aria-label="Read Books"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 p-6 border-l-0 border-r-0 border-b-0 border-color-4 "
        >
          {readBooksList.map((books) => (
            <BooksListItem key={books.bookId} books={books}></BooksListItem>
          ))}
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab font-work font-normal text-lg text-color-2"
          aria-label="Wishlist Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100  border-l-0 border-r-0 border-b-0 border-color-4  p-6"
        >
          {wishBooksList.map((books) => (
            <BooksListItem key={books.bookId} books={books}></BooksListItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
