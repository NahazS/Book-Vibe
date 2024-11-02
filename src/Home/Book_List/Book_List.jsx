import { useLoaderData } from "react-router-dom";
import Book_card from "./Book_card";

const Book_List = () => {
    const books = useLoaderData();
    return (
        <div className="max-w-[1170px] mx-auto mt-[100px]">
            <h2 className="font-Playfair font-bold mb-[36px] text-center">Book</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.map(book => <Book_card key={book.bookId} book={book}></Book_card>)
                }
            </div>
        </div>
    );
};

export default Book_List;