"use client";
import Link from "next/link";
import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { GrClose, GrMenu } from "react-icons/gr";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`${isOpen ? "h-screen" : "h-0"} md:h-auto  bg-white text-black flex flex-col md:flex-row align-center items-center md:p-1`}
        >
            <div className="flex justify-center md:justify-start items-center relative w-full md:w-auto p-4 md:p-0">
                {isOpen ? <GrClose
                    className="cursor-pointer absolute right-4 md:hidden"
                    onClick={toggleSidebar} /> :
                    <GrMenu
                        className="text-white text-2xl cursor-pointer absolute right-4 top-4 md:hidden"
                        onClick={toggleSidebar}
                    />}
            </div>
            <nav className="w-[100%] h-[100%] text-[18px] md:h-auto flex flex-col md:flex-row align-center items-center justify-center md:justify-end gap-10">
                <Link
                    className={`hover:text-blue_d font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Inicio
                </Link>
                <Link
                    className={`hover:text-blue_d font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/#planos"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Sobre
                </Link>
                <Link
                    className={`hover:text-blue_d font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/screens/Menu"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Cardápio
                </Link>
                <Link
                    className={`hover:text-blue_d font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/#contato"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Contato
                </Link>
                <Link
                    href="https://api.whatsapp.com/send?phone=5511966105821"
                    target="_blank"
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-40 text-center hover:scale-105 transition-all duration-300 ease-in-out text-zinc-800 py-1 px-4 rounded-4xl border-2 border-amber-500 cursor-pointer ${!isOpen ? "hidden md:block" : ""}`}>
                    <BsWhatsapp className="inline-block mr-2" />
                    Peça Já
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;
