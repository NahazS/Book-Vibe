import { useLoaderData } from "react-router-dom";
import Read_Card from "./Read_Card";
const Read = ({sort}) => {
    const books = useLoaderData();
    const readBooksStr = localStorage.getItem('read');
    const readBooks = readBooksStr ? JSON.parse(readBooksStr) : [];
    const readList = books.filter(book => readBooks.includes(String(book.bookId)));
    if(sort === "Sort By"){
        // sort the books in order how the user select the books
        readList.sort((book1, book2) => readBooks.indexOf((String(book1.bookId))) - readBooks.indexOf((String(book2.bookId))))
    } else if(sort === "Rating"){
        // sort the books in order of rating
        readList.sort((book1,book2) => book2.rating - book2.rating)
    } else if(sort === "Number of pages"){
        // sort the books in order of total pages
        readList.sort((book1,book2) => book2.totalPages - book1.totalPages)
    } else if(sort === "Publisher year") {
        // sort the books in order of year of publishing
        readList.sort((book1,book2) => book2.yearOfPublishing - book1.yearOfPublishing)
    }
    return (
        <div className="w-full flex flex-col gap-y-6">
            {
                readList.map(book => <Read_Card key={book.bookId} book={book}></Read_Card>)
            }
        </div>
    );
};

export default Read;