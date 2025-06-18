'use client';
import Image from "next/image";
import home_pizza_background from "@/assets/vista-de-uma-refeicao-deliciosa-pronta-para-comer.jpg";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { TbListDetails } from "react-icons/tb";
import PageTemplate from "@/components/PageTemplate";

const HomePage = () => {
    return (
        <PageTemplate
            className="items-center justify-center"
            id="home">
            <Image
                src={home_pizza_background}
                alt="Pizza Background"
                className="-z-10 scale-x-[-1] w-full object-cover absolute h-screen"
            />
            <div className="p-10 rounded-2xl z-10">
                <h1 className="md:w-2/3 text-3xl md:text-6xl font-bold text-amber-500">A pizza que você precisa!</h1>
                <p className="mt-6 text-lg text-white">A melhor pizza de Cotia!</p>

                <nav className="mt-10 flex flex-col items-center md:items-start gap-4">
                    <Link
                        href="/screens/Menu/"
                        className="w-60 md:w-40 text-center hover:scale-115 transition-all duration-300 ease-in-out text-white py-2 px-4 rounded-4xl border-2 border-amber-500 cursor-pointer">
                        <TbListDetails className="inline-block mr-2" />
                        Cardápio
                    </Link>
                    <Link
                        href="https://api.whatsapp.com/send?phone=5511966105821"
                        target="_blank"
                        className="w-60 md:w-40 text-center hover:scale-115 transition-all duration-300 ease-in-out py-2 px-4 text-white rounded-4xl border-2 border-amber-500 cursor-pointer">
                        <BsWhatsapp className="inline-block mr-2" />
                        Peça Já
                    </Link>
                </nav>
            </div>
        </PageTemplate>
    );
};

export default HomePage;
