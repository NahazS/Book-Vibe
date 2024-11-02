import { SlLocationPin } from "react-icons/sl";
import { GoPeople } from "react-icons/go";
import { LuFiles } from "react-icons/lu";
import { Link } from "react-router-dom";
const Read_Card = ({book}) => {
    const {bookName,author,image,rating,category,tags,totalPages,publisher,yearOfPublishing} = book
    return (
        <div className="p-6 flex flex-col md:flex-row gap-x-6 border-[1px] border-[#dcdcdc] rounded-2xl">
            <div className="h-flex w-full lg:w-[230px] bg-[#f3f3f3] rounded-2xl place-content-center">
                <img className="h-[172px] mx-auto" src={image} alt="" />
            </div>
            <div>
                <h4 className="text-[#131313] font-Playfair font-bold mb-4">{bookName}</h4>
                <p className="text-[#424242] font-medium mb-4">by: {author}</p>
                <div className="flex flex-wrap mb-4 gap-4">
                    <div className="flex items-center gap-x-2">
                        <p className="text-[#131313] font-bold">Tag</p>
                        <div className="flex flex-wrap gap-3">
                            {
                                tags.map((tag,index) => <p key={index} className="py-[7px] px-4 bg-[#f6fcf4] rounded-[30px] text-[#23BE0A] font-medium">{tag}</p> )
                            }
                        </div>
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <SlLocationPin className="text-2xl" />
                        <p className="text-[#424242]">Year of Publishing: {yearOfPublishing}</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex gap-x-2 items-center">
                        <GoPeople className="text-2xl" />
                        <p className="text-[#717171]">Publisher: {publisher}</p>
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <LuFiles className="text-2xl" />
                        <p className="text-[#717171]">Page {totalPages}</p>
                    </div>
                </div>
                <hr  className="mb-4"/>
                <div className="flex flex-wrap gap-3">
                    <p className="py-[11px] px-5 bg-[#e2edfe] rounded-[30px] text-[#328EFF]">Category: {category}</p>
                    <p className="py-[11px] px-5 bg-[#fdf3e2] rounded-[30px] text-[#FFAC33]">Rating:: {rating}</p>
                    <Link to={`/${book.bookId}`}><button className="py-[11px] px-5 bg-[#23BE0A] rounded-[30px]">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Read_Card;