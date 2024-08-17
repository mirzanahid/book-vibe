import { Link } from "react-router-dom";
import book from "../../assets/banner-png.png"

const Banner = () => {
  return (
    <div className="flex justify-between items-center bg-color-4 py-[136px] px-[120px] rounded-[24px]">
        <div className="">
            <h1 className="font-play font-bold text-[56px] text-color-2 leading-[84px] mb-[48px] w-[526px]">Books to freshen up your bookshelf</h1>
            <Link className="capitalize bg-color-1 font-work font-bold text-xl text-white px-[28px] py-[21px] rounded-[8px]">View The List</Link>
           
        </div>
        <div>
            <img className="w-[318px] h-[394px]" src={book} alt="book" />
        </div>
    </div>
  )
}

export default Banner