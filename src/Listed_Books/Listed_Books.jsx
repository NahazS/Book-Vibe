import { Link } from "react-router-dom";
import Read from "./Read_Book/Read";
import { useState } from "react";
import Wish from "./Wish_Book/Wish";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Listed_Books = () => {
    // handle the sort button click
    const [sortClick, setSortClick] = useState(false)
    const handleSortClick = (state) => {
        setSortClick(state)
    }
    // set the sort type
    const [sort, setSort] = useState('Sort By');
    const handleSortType = (sort) => {
        setSort(sort)
        setSortClick(!sortClick)
    }
    // handle the read and wish click
    const [readClick, setReadClick] = useState(true)
    const [wishClick, setWishClick] = useState(false)
    const handleReadClick = () => {
        setWishClick(!wishClick)
        setReadClick(!readClick)
    }
    const handleWishClick = () => {
        setReadClick(!readClick)
        setWishClick(!wishClick)
    }
    return (
        <div className="max-w-[1170px] mt-9 mx-auto">
            <div className="bg-[#f3f3f3] w-full h-[100px] flex items-center justify-center rounded-[16px]">
                <h3>Book</h3>
            </div>
            <div className="mt-8 w-fit text-center flex flex-col mx-auto">
                <button onClick={() => handleSortClick(!sortClick) } className="btn-primary bg-[#23BE0A] flex gap-x-4 items-center">{sort}{sortClick ? <FaChevronUp /> : <FaChevronDown />}</button>
                <ul className={`${sortClick ? 'flex flex-col bg-[#f3f3f3]' : 'hidden'} px-2 w-full`}>
                    <Link className="cursor-pointer hover:shadow-xl hover:border-[1px] hover:border-[#23BE0A] active:shadow-inner" onClick={() => handleSortType("Rating")}>Rating</Link>
                    <Link className="cursor-pointer hover:shadow-xl hover:border-[1px] hover:border-[#23BE0A] active:shadow-inner" onClick={() => handleSortType("Number of pages")}>Number of pages</Link>
                    <Link className="cursor-pointer hover:shadow-xl hover:border-[1px] hover:border-[#23BE0A] active:shadow-inner" onClick={() => handleSortType("Publisher year")}>Publisher year</Link>
                </ul>
            </div>
            <div className="flex mb-12 mt-[56px] items-end">
                <button onClick={handleReadClick} className={`${readClick ? 'border-[#b8b8b8] border-x-2 border-t-2 rounded-t-[8px] border-b-0' : 'border-b-2'} py-[14px] px-[17px]`}>Read Books</button>
                <button onClick={handleWishClick} className={`${wishClick ? 'border-[#b8b8b8] border-x-2 border-t-2 rounded-t-[8px] border-b-0' : 'border-b-2'} py-[14px] px-[17px]`}>Wishlist Books</button>
                <hr  className="flex-grow border-[1px]" />
            </div>
            <div className={`${readClick ? 'flex' : 'hidden'}`}>
                <Read sort={sort}></Read>
            </div>
            <div className={`${wishClick ? 'flex' : 'hidden'}`}>
                <Wish sort={sort}></Wish>
            </div>
        </div>
    );
};

export default Listed_Books;