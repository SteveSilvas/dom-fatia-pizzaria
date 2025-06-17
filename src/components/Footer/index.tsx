import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="md:h-40 flex flex-col md:flex-row bg-zinc-800 p-4 md:p-8 gap-6 items-center justify-evenly text-white">

            <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={100}
                height={100}
                className="h-20 w-auto"
            />


            <div className="flex flex-col gap-4">
                <strong className="text-white text-lg">Horário de Atendimento</strong>
                <span className="text-zinc-300">Dom à Qui - 18h às 23:45h</span>
                <span className="text-zinc-300">Sex e Sab - 18h às 00:30h</span>
            </div>

            <div className="flex flex-col gap-4">

                <strong className="text-white text-lg">Contato</strong>
                <Link
                    className="flex items-center gap-2 text-zinc-300 hover:text-amber-500 cursor-pointer"
                    href="https://wa.me/5599999999999"
                    target="_blank"
                >
                    <BsWhatsapp className="inline text-2xl" />
                    <span >(99) 99999-9999</span>
                </Link>
                <Link
                    className="flex items-center gap-2 text-zinc-300 hover:text-amber-500 cursor-pointer"
                    href="https://www.instagram.com/restaurante_exemplo"
                    target="_blank"
                >
                    <BsInstagram className="inline text-2xl" />
                    <span>@restaurante_exemplo</span>
                </Link>
            </div>

            <div>
                <button
                    className="bg-amber-500 text-white py-2 px-4 rounded hover:bg-amber-600 cursor-pointer">
                    Fazer Pedido
                </button>
            </div>
        </footer>
    );
};

export default Footer;
