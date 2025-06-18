import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
    return (
        <PageTemplate
            height="h-auto"
            id="contact"
            className="bg-[#020202]">
            <h1 className="mt-6 text-3xl font-bold text-zinc-300">Entre em Contato conosco</h1>
            <div className="flex flex-col gap-4 my-4">
                <Link
                    className="flex items-center gap-2 text-zinc-300 hover:text-amber-500 cursor-pointer"
                    href="https://wa.me/5511966105821"
                    target="_blank"
                >
                    <BsWhatsapp className="inline text-2xl" />
                    <span >(11) 96610-5821</span>
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

        </PageTemplate>
    );
};
export default Contact;