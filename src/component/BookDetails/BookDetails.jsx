import { useLoaderData, useParams } from "react-router-dom";
import { getLocalHost, removeLocalHost, saveLocalHost } from "../../utilites/localstorage";
import { Bounce, toast } from "react-toastify";

const BookDetails = () => {
  const bookDetails = useLoaderData();

  const { booksId } = useParams();
  const idInt = parseInt(booksId);

  const book = bookDetails.find((bookDetail) => bookDetail.bookId == idInt);

  const {
    bookId,
    bookName,
    author,
    bookImg,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handleForRead = (id) => {
    const readLocalData = getLocalHost("read-books");
    const exits = readLocalData.find((readData) => readData === id);
    if (!exits) {
     
      saveLocalHost(id, "read-books");
      toast.success("Successfully added to read", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      removeLocalHost(id,"wish-books")
    } else {
      toast.error("Already added to read", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      return;
    }
  };

  const handleForWishList = (id) => {
    const readLocalData = getLocalHost("read-books");
    const exitsRead = readLocalData.find((readData) => readData === id);
    const wishLocalData = getLocalHost("wish-books");
    const exitsWish = wishLocalData.find((wishData) => wishData === id);
    if (!exitsRead) {
      if (!exitsWish) {
        saveLocalHost(id,"wish-books");
        toast.success("Successfully added to Wish List", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        toast.error("Already added to Wish List", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return
      }
    } else {
      toast.error("Already Read this book", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    return
  };

  return (
    <div className="flex pb-[164px] gap-12">
      <div className=" w-[574px] h-[711px] bg-color-4 rounded-2xl flex justify-center items-center">
        <img className="w-[425px] h-[564px]" src={bookImg} alt="" />
      </div>
      <div className="w-1/2">
        <h2 className="font-play font-bold text-[40px] text-color-2 mb-4">
          {bookName}
        </h2>
        <p className="font-work font-medium text-xl text-color-3 pb-6">
          By : {author}
        </p>

        <p className="font-work font-medium text-xl text-color-3 border-t border-b border-[#dcdcdc] py-4 mb-6">
          {category}
        </p>
        <p className="font-work text-base text-color-7 font-normal leading-[26px]">
          <span className="font-work font-bold text-base text-color-2">
            Review :
          </span>{" "}
          {review}
        </p>
        <p className="font-work font-bold text-base text-color-2 mr-2 mt-6">
          Tag:
          {tags.map((tag, idx) => (
            <span
              className="font-work font-medium text-base text-color-1 bg-color-5 py-[7px] px-[16px] rounded-[30px] ml-4 mb-[16px] inline-block "
              key={idx}
            >
              {tag}
            </span>
          ))}
        </p>
        <div className="flex border-t border-[#dcdcdc] pt-6">
          <ul className="font-work font-normal text-base text-color-7 mr-[60px]">
            <li className="mb-3"> Number of Pages:</li>
            <li className="mb-3"> Publisher:</li>
            <li className="mb-3"> Year of Publishing:</li>
            <li> Rating:</li>
          </ul>
          <ul className="font-work font-semibold text-base text-color-2">
            <li className="mb-3"> {totalPages}</li>
            <li className="mb-3"> {publisher}</li>
            <li className="mb-3"> {yearOfPublishing}</li>
            <li> {rating}</li>
          </ul>
        </div>
        <div className="mt-8">
          <button
            onClick={() => handleForRead(bookId)}
            className=" capitalize font-work font-semibold text-lg border border-[#b8b8b8] text-color-2 rounded py-[14px] px-[30px] hidden md:inline-flex mr-4 hover:text-white hover:bg-color-6 hover:border-color-6 duration-500"
          >
            Read
          </button>
          <button onClick={()=> handleForWishList(bookId)} className=" capitalize font-work font-semibold text-lg border border-[#b8b8b8] text-color-2 rounded py-[14px] px-[30px] hidden md:inline-flex mr-4 hover:text-white hover:bg-color-6 hover:border-color-6 duration-500">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
