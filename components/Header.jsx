"use client"
import Link from 'next/link'
import {useState} from "react";
import {BiChevronDown, BiRestaurant} from "react-icons/bi";
import {AiOutlineClose, AiOutlineMenuUnfold} from "react-icons/ai";
import {Button} from "@/components/Button";
export const Header = () => {
    const [menu, setMenu] =useState(false)
    const handleChange=()=>{
        setMenu(!menu)
    }
    const closeMenu=()=>{
        setMenu(false)
    }
    return (
        <header className={"fixed w-full z-10"}>
            <div className={"flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]"}>
                <div className={"flex flex-row items-center cursor-pointer"}>
                    <span>
                        <BiRestaurant size={32}/>
                    </span>
                    <h1 className={"text-xl font-semibold"}>FoodieWeb</h1>
                </div>
                <nav className={"hidden md:flex flex-row items-center text-lg font-medium gap-8"}>
                    <Link href="/" className={"hover:text-bright transition-all cursor-pointer"}>Home</Link>
                    <Link href="dishes" className={"hover:text-bright transition-all cursor-pointer"}>Dishes</Link>
                    <Link href="/#about" className={"hover:text-bright transition-all cursor-pointer"}>About</Link>
                    <Link href="/#reviews" className={"hover:text-bright transition-all cursor-pointer"}>Reviews</Link>
                    <Button title={"login"}/>
                </nav>
                <div className={"md:hidden flex items-center"}>
                    {menu ? (
                        <AiOutlineClose size={25} onClick={handleChange} />
                    ) :(
                        <AiOutlineMenuUnfold size={25} onClick ={handleChange}/>
                    )
                    }
                </div>
            </div>
            <div className={`${menu ? "translate-x-0": "translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                <Link href="/" className={"hover:text-bright transition-all cursor-pointer"}>Home</Link>
                <Link href="dishes" className={"hover:text-bright transition-all cursor-pointer"}>
                    Dishes
                </Link>

                <Link href="/#about" className={"hover:text-bright transition-all cursor-pointer"}>About</Link>
                <Link href="/#reviews" className={"hover:text-bright transition-all cursor-pointer "}>Reviews</Link>
                <Button title={"login"}/>
            </div>
        </header>
    );
};