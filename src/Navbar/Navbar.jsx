import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
const Navbar = () => {
    const [menu, setMenu] = useState(false)
    return (
        <div className="flex justify-between items-center mt-[54px] max-w-[1170px] mx-auto">
            <Link to={'/'}><h3 className="font-Work_Sans font-bold"><span className="text-[24px] sm:text-[28px]">Book Vibe</span></h3></Link>
            <ul className="hidden lg:flex text-[18px] text-[#131313] text-opacity-80 gap-x-4">
                <NavLink className="py-[14px] px-5" to={'/'}>Home</NavLink>
                <NavLink className="py-[14px] px-5" to={'/listed_books'}>Listed Books</NavLink>
                <NavLink className="py-[14px] px-5" to={'/pages_to_read'}>Pages to Read</NavLink>
            </ul>
            <div className="flex gap-x-4">
                
                {/* for small device add a menu button */}
                <div className="relative lg:hidden">
                    <button onClick={() => setMenu(!menu)} className="btn-primary bg-[#59C6D2] flex items-center">Menu<HiMenuAlt3 className="text-2xl" /></button>
                    <div className={` ${menu ? 'flex' : 'hidden'} flex-col absolute bg-[#f3f3f3] rounded-b-lg`}>
                        <NavLink onClick={() => setMenu(!menu)} className="py-[14px] px-5" to={'/'}>Home</NavLink>
                        <NavLink onClick={() => setMenu(!menu)} className="py-[14px] px-5" to={'/listed_books'}>Listed Books</NavLink>
                        <NavLink onClick={() => setMenu(!menu)} className="py-[14px] px-5" to={'/pages_to_read'}>Pages to Read</NavLink>
                        <NavLink onClick={() => setMenu(!menu)} className="flex md:hidden py-[14px] px-5" to={'/sign_in'}>Sign In</NavLink>
                        <NavLink onClick={() => setMenu(!menu)} className="flex md:hidden py-[14px] px-5" to={'/sign_up'}>Sign Up</NavLink>

                    </div>
                </div>
                <button className="hidden md:flex bg-[#23BE0A] btn-primary">Sign In</button>
                <button className="hidden md:flex bg-[#59C6D2] btn-primary ">Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;