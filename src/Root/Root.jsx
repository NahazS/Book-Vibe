import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    const navigation = useNavigation
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