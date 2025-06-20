'use client';
import PageTemplate from "@/components/PageTemplate";
import PageTitle from "@/components/PageTitle";
import dynamic from "next/dynamic";
import { MdLocationPin } from "react-icons/md";

const DynamicMap = dynamic(() => import('@/components/Map'), {
    ssr: false,
    loading: () => <p>Carregando conteúdo do mapa...</p>,
});

const Address = () => {
    return (
        <PageTemplate
            id="address"
            className="flex flex-col bg-white dark:bg-[#080808]"
            height="h-auto"
        >
            <section className="relative w-full py-4 px-6">
                <PageTitle>Onde Estamos</PageTitle>
                <div className=" flex flex-col gap-1 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 mt-6">
                    <strong className="text-zinc-800 dark:text-zinc-400">
                        <MdLocationPin className="inline text-2xl" />
                        Rua Paulo Sérgio Lemos, N° 18 <br />
                        Jd. Panorama. Cotia - SP
                    </strong>
                </div>
            </section>

            <DynamicMap />

        </PageTemplate>
    );
};

export default Address;
