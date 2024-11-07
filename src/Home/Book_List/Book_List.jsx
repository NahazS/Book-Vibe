import { useLoaderData, useNavigation } from "react-router-dom";
import Book_card from "./Book_card";
import Book_card_skeleton from "./Book_card_skeleton";

const Book_List = () => {
    const navigation = useNavigation()
    const books = useLoaderData();
    return (
        <div className="max-w-[1170px] mx-auto mt-[100px]">
            <h2 className="font-Playfair font-bold mb-[36px] text-center">Book</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    navigation.state === 'loading' 
                        ? Array(6).fill(<Book_card_skeleton />) 
                        : books.map(book => <Book_card key={book.bookId} book={book} />)
                }
            </div>
        </div>
    );
};

export default Book_List;