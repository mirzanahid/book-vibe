import PropTypes from "prop-types";

const BooksListItem = ({ books }) => {
  const {
    bookId,
    bookName,
    author,
    bookImg,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = books;
  return (
    <div className=" border flex border-color-5 rounded-2xl p-6 mb-6">
       <div className='bg-color-4 rounded-2xl flex justify-center items-center w-[230px] h-[230px] mr-6'>
        <img className='h-[172px]' src={bookImg} alt="" />
      </div>

      <div>
        <h3 className="font-play font-bold text-2xl text-color-2 mb-[16px]">
          {bookName}
        </h3>
        <p className="font-work font-medium text-base text-color-2">
          By: {author}
        </p>

        <p className="font-work font-bold text-base text-color-2 mr-2 mt-4">
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
        <ul className="font-work font-normal text-base text-color-3 flex gap-4">
          <li className="mb-3">Publisher: {publisher}</li>
          <li className="mb-3">Page {totalPages}</li>
          <li className="mb-3">Year of Publishing:  {yearOfPublishing}</li>
        </ul>

        <div className="border-t border-color-4 pt-4">
            <span className="font-work font-medium text-base text-color-11 bg-color-8 py-[7px] px-[16px] rounded-[30px] inline-block ">Category: {category}</span> <span className="font-work font-medium text-base text-color-10 bg-color-9 py-[7px] px-[16px] rounded-[30px] ml-3 inline-block ">Rating: 4.5</span> 
        </div>
      </div>
    </div>
  );
};
BooksListItem.propTypes = {
  books: PropTypes.object.isRequired,
};

export default BooksListItem;
