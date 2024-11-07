import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SignInSkeleton from "../UserStates/SignIn/SignInSkeleton";
import Book_card_skeleton from "../Home/Book_List/Book_card_skeleton";

const Root = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            {
                navigation.state === "loading" ? <img className="flex mx-auto" src="/loading.gif" alt="" /> : <Outlet></Outlet>
            }
        </div>
    );
};

export default Root;