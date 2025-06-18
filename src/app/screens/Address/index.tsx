'use client';
import Map from "@/components/Map";
import PageTemplate from "@/components/PageTemplate";
import { MdLocationPin } from "react-icons/md";

const Address = () => {
    return (
        <PageTemplate
            id="address"
            className="flex flex-col md:flex-row bg-white"
            height="h-auto"
        >
            <section className="relative w-full md:w-1/2 py-4 px-6">
                <h1 className="mt-6 text-3xl font-bold text-[#080808]">Onde Estamos</h1>

                <div className="flex flex-col gap-1">
                    <strong className="text-zinc-800">
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
