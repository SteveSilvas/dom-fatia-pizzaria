'use client';
import Map from "@/components/Map";
import PageTemplate from "@/components/PageTemplate";
import PageTitle from "@/components/PageTitle";
import { MdLocationPin } from "react-icons/md";

const Address = () => {
    return (
        <PageTemplate
            id="address"
            className="flex flex-col md:flex-row bg-white dark:bg-[#080808]"
            height="h-auto"
        >
            <section className="relative w-full md:w-1/2 py-4 px-6">
                <PageTitle>Onde Estamos</PageTitle>
                <div className=" flex flex-col gap-1 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 mt-6">
                    <strong className="text-zinc-800 dark:text-zinc-400">
                        <MdLocationPin className="inline text-2xl" />
                        Rua Paulo Sérgio Lemos, N° 18 <br />
                        Jd. Panorama. Cotia - SP
                    </strong>
                </div>
            </section>

            <Map />

        </PageTemplate>
    );
};

export default Address;
