import Image from "next/image";
import NavLink from "./NavLink";
import profile from "@/assets/profile.png"
import Link from "next/link";

const NavBar = () => {
    return (
        <div className="navbar bg-[#ffffff] shadow-sm xl:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    {/* mobile menu */}
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-[#ffffff] rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <NavLink href={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink href={"/animals"}>All Animals</NavLink>
                        </li>
                        
                    </ul>
                </div>
                {/* logo */}
                <h2 className=" text-[#2D6A4F] text-[1.5rem] font-bold">QurbanirHat</h2>
            </div>
            {/* desktop menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink href={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink href={"/animals"}>All Animals</NavLink>
                    </li>
                </ul>
            </div>
            {/* last end if user logged */}
            {/* <div className="navbar-end flex items-center gap-3">
                <Image
                    src={profile}
                    height={40}
                    width={40}
                    alt="profile avatar"
                    className="rounded-full border border-[#40916C]" />
                <a className="btn btn-outline border border-red-600 font-semibold text-red-600 hover:bg-red-100 hover:text-red-700">Login</a>
            </div> */}

            {/* if user no logged in */}
            <div className="navbar-end flex items-center gap-3">

                <Link href={"/login"}>
                    <button className="btn btn-outline border border-[#40916C] font-semibold text-[#40916C] hover:bg-[#2D6A4F] hover:text-[#ffffff]">Login</button>
                </Link>
                
                <Link href={"/register"}>
                    <button className="hidden md:flex btn bg-[#40916C] font-semibold text-[#FFFFFF] hover:bg-[#2D6A4F]">Register</button>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;