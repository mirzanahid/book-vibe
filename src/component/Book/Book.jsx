import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
  
  const { 
    bookId,
    bookName,
    author,
    bookImg,
    rating,
    category,
    tags}= book
  
    
  return (
    <Link to={`/book-details/${bookId}`} className='w-[374px] p-6 border border-color-4 rounded-2xl'>
      <div className='bg-color-4 rounded-2xl flex justify-center items-center py-8 px-[96px]'>
        <img className='h-[166px]' src={bookImg} alt="" />
      </div>
     <div className='border-b border-dashed border-color-4 pb-5'>
     <div>
     {
      tags.map((tag,idx)=>  <span className='font-work font-medium text-base text-color-1 bg-color-5 py-[7px] px-[16px] rounded-[30px] mr-[12px] mt-[24px] mb-[16px] inline-block' key={idx}>{tag}</span>)
     }
     </div> 

     <h3 className='font-play font-bold text-2xl text-color-2 mb-[16px]'>{bookName}</h3>
     <p className='font-work font-medium text-base text-color-2'>By: {author}</p>
     </div>

      <div className='font-work font-medium text-base text-color-3 flex justify-between items-center mt-5'>
        <p>{category}</p>
        <span>{rating}</span>
      </div>
    </Link>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired
};
export default Book