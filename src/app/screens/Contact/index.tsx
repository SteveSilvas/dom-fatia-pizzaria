import PageTemplate from "@/components/PageTemplate";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
    return (
        <PageTemplate
            height="h-auto"
            id="contact"
            className="bg-amber-600 dark:bg-[#080808] text-zinc-400 py-4 px-6">

            <PageTitle>Entre em Contato Conosco</PageTitle>
            <div className="flex flex-col gap-4 my-4">
                <Link
                   className="flex items-center gap-2 text-zinc-800 dark:text-amber-600 hover:text-zinc-700 dark:hover:text-amber-500 cursor-pointer"
                    href="https://wa.me/5511966105821"
                    target="_blank"
                >
                    <BsWhatsapp className="inline text-2xl" />
                    <span >(11) 96610-5821</span>
                </Link>
                <Link
                   className="flex items-center gap-2 text-zinc-800 dark:text-amber-600 hover:text-zinc-700 dark:hover:text-amber-500 cursor-pointer"
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