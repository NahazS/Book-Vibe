import { useLoaderData } from "react-router-dom";
import Read_Card from "../Read_Book/Read_Card";

const Wish = ({sort}) => {
    const books = useLoaderData();
    const readBooksStr = localStorage.getItem('wish');
    const readBooks = readBooksStr ? JSON.parse(readBooksStr) : [];
    const readList = books.filter(book => readBooks.includes(String(book.bookId)));
    if(sort === "Sort By"){
        readList.sort((book1, book2) => readBooks.indexOf((String(book1.bookId))) - readBooks.indexOf((String(book2.bookId))))
    } else if(sort === "Rating"){
        readList.sort((book1,book2) => book2.rating - book2.rating)
    } else if(sort === "Number of pages"){
        readList.sort((book1,book2) => book2.totalPages - book1.totalPages)
    } else if(sort === "Publisher year") {
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

export default Wish;