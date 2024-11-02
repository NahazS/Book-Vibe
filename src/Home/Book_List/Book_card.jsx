import { HiOutlineStar } from "react-icons/hi";
import { Link } from "react-router-dom";
const Book_card = ({book}) => {
    const id = book.bookId;
    const{image,tags,bookName,author,category,rating,} = book
    return (
        <Link to={`/${book.bookId}`}>
            <div className="mx-auto h-full p-6 flex flex-col rounded-2xl border-[1px] border-[#131313] border-opacity-80 max-w-[374px] cursor-pointer shadow-md hover:shadow-xl active:shadow-inner ">
                <div className="bg-[#F3F3F3] h-[230px] mb-6 w-full rounded-2xl flex place-content-center items-center">
                    <img className="h-[166px]" src={image} alt="" />
                </div>
                <div className="text-[#23BE0A] font-medium flex flex-wrap gap-3 mb-4">
                    {
                        tags.map((t, index) => <p key={index} className="py-[6px] px-[16px] rounded-[30px] bg-[#f6fcf4]">{t}</p>)
                    }
                </div>
                <h4 className="font-Playfair font-bold mb-4">{bookName}</h4>
                <p className="font-medium text-[#131313] text-opacity-80 mb-5">by:{author}</p>
                <hr className="border-dashed mb-5" />
                <div className="font-medium text-[#131313] text-opacity-80 flex justify-between">
                    <p>{category}</p>
                    <p className="flex items-center">{rating} <HiOutlineStar /></p>
                </div>
            </div>
        </Link>
    );
};

export default Book_card;