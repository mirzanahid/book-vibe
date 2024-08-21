import { useLoaderData } from "react-router-dom";
import { getLocalHost } from "../../utilites/localstorage";
import BooksListItem from "../../component/BooksListItem/BooksListItem";

const ListedBooks = () => {
  const readBooks = getLocalHost("read-books");
  const wishBooks = getLocalHost("wish-books");
  const bookList = useLoaderData();

  const readBooksList = readBooks.map((id) =>
    bookList.find((book) => book.bookId === id)
  );
  const wishBooksList = wishBooks.map((id) =>
    bookList.find((book) => book.bookId === id)
  );

  console.log(readBooksList);

  return (
    <div role="tablist" className="tabs tabs-lifted">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Tab 1"
        defaultChecked
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-t  rounded-box p-6"
      >
        {readBooksList.map((books) => (
          <BooksListItem
            key={books.bookId}
            books={books}
          ></BooksListItem>
        ))}
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Tab 2"
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-t border-color-4 rounded-box p-6"
      >
        {wishBooksList.map((books) => (
          <BooksListItem
            key={books.bookId}
            books={books}
          ></BooksListItem>
        ))}
      </div>
    </div>
  );
};

export default ListedBooks;
