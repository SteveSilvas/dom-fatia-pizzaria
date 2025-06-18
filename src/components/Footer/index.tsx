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
                <span className="text-zinc-300">Terça à domingo</span>
                <span className="text-zinc-300">das 18h às 23h</span>
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
                    href="https://www.instagram.com/domfatiapizzaria/?igsh=YXAza244MWFmeWUx&utm_source=qr#"
                    target="_blank"
                >
                    <BsInstagram className="inline text-2xl" />
                    <span>@domfatiapizzaria</span>
                </Link>
            </div>

            <Link
                href="https://api.whatsapp.com/send?phone=5511966105821"
                target="_blank"
                className={`w-40 text-center hover:scale-105 transition-all duration-300 ease-in-out text-zinc-300 py-1 px-4 rounded-4xl border-2 border-amber-500 cursor-pointer`}>
                <BsWhatsapp className="inline-block mr-2" />
                Peça Já
            </Link>
        </footer>
    );
};

export default Footer;
