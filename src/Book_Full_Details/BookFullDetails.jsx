import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addReadBook, addWishBook } from "../LocalStorage/localStorage";
const BookFullDetails = () => {
    const books = useLoaderData()
    const {bookId} = useParams()
    const selectBook = books.find(book => book.bookId == bookId)
    const {bookName,author,image,review,rating,category,tags,totalPages,publisher,yearOfPublishing} = selectBook
    
    // add book in localStorage
    const handleRead = () => {
        addReadBook(bookId)
    }
    const handleWished = () => {
        addWishBook(bookId)
    }
    return (

        <div className="flex flex-col md:flex-row gap-x-12 max-w-[1170px] mx-auto mt-12 ">
            <div className="bg-[#f3f3f3] rounded-2xl h-full place-items-center w-[53.14%]">
                <img className="p-[30px] lg:p-[74px] h-full w-full" src={image} alt="" />
            </div>
            <div className="md:max-w-[46.86%]">
                <h2 className="font-Playfair font-bold mb-4">{bookName}</h2>
                <p className="text-[#424242] mb-6">by: {author}</p>
                <hr className="mb-4" />
                <h5 className="text-[#424242] mb-4">{category}</h5>
                <hr className="mb-6" />
                <p className="text-[#131313] font-bold mb-6">Review: <span className="text-[#424242] font-normal">{review}</span></p>
                <div className="flex gap-x-3 mb-6 text-[#23BE0A] items-center">
                    <p className="text-[#131313] font-bold">Tag</p>
                    <div className="flex flex-wrap gap-3">
                        {
                            tags.map((t, index) => <p key={index} className="py-[6px] px-[16px] rounded-[30px] bg-[#f6fcf4]">#{t}</p>)
                        }
                    </div>
                </div>
                <hr className="mb-6" />
                <div className="max-w-[358px] mb-8 flex justify-between">
                    <div className="text-[#5a5a5a]">
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className="text-[#131313]">
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>
                <div className="flex gap-x-4">
                    <button onClick={handleRead} className="btn-primary border-[1px] border-[#131313] border-opacity-30 rounded-lg "><span className="text-black">Read</span></button>
                    <button onClick={handleWished} className="btn-primary bg-[#50B1C9] ">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
        
    );
};

export default BookFullDetails;