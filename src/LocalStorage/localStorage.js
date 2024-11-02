import { ToastContainer, toast } from 'react-toastify';
// find the read item in local storage
const getReadBook = () => {
    const readBook = localStorage.getItem('read');
    return readBook ? JSON.parse(readBook) : []
}
// find the wish item in local storage
const getWishBook = () => {
    const wishBook = localStorage.getItem('wish');
    return wishBook ? JSON.parse(wishBook) : []
}
// add a new item in local storage (read item)
const addReadBook = bookId => {
    const readBook = getReadBook();
    if(!readBook.includes(bookId)){
        // remove the item from wish list
        removeWishBook(bookId);
        readBook.push(bookId);
        localStorage.setItem('read', JSON.stringify(readBook))
        toast("Successfully added in read list")
    } else{
        toast("Already read this book")
    }
}
const addWishBook = bookId => {
    const wishBook = getWishBook();
    const readBook = getReadBook();
    // if the item not exist in wish list and the read list then the item add in the wish list
    if(!wishBook.includes(bookId) && !readBook.includes(bookId)){
        wishBook.push(bookId);
        localStorage.setItem('wish', JSON.stringify(wishBook));
        toast("Successfully added in wish list")
    }
    // if the item not exist in wish list but exist in read list
    else if(!wishBook.includes(bookId) && readBook.includes(bookId)){
        toast("Already read this book")
    } 
    // if the item exist in wish list but not exist in read list
    else if(wishBook.includes(bookId) && !readBook.includes(bookId)){
        toast("Already in wished list")
    }
}

// remove from wish list (this function use in 17 no line )
const removeWishBook = bookId => {
    const wishBook = getWishBook();
    const newListBook = wishBook.filter(id => id !== bookId)
    localStorage.setItem('wish', JSON.stringify(newListBook))
}
export {getReadBook, addReadBook, addWishBook}