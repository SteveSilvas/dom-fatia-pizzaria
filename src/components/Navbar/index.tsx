import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex md:min-h-20 items-center justify-between p-4 bg-white  text-zinc-800">
            <ul className="flex gap-10">
                <Link
                    href="/"
                    className="font-bold hover:border-b-2 border-zinc-800 cursor-pointer">
                    Início
                </Link>
                <Link
                    href="about"
                    className="font-bold hover:border-b-2 border-zinc-800 cursor-pointer">
                    Sobre
                </Link>
                <Link
                    href="screens/Menu"
                    className="font-bold hover:border-b-2 border-zinc-800 cursor-pointer">
                    Cardápio
                </Link>
                <Link
                    href="/order"
                    className="font-bold hover:border-b-2 border-zinc-800 cursor-pointer">
                    Contato
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;