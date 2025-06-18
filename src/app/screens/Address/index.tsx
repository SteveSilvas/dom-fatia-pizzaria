import Map from "@/components/Map";
import PageTemplate from "@/components/PageTemplate";

const Address = () => {
    return (
        <PageTemplate
            id="address"
            className="flex flex-col md:flex-row bg-amber-500"
        >
            <section className="relative w-full md:w-1/2 md:h-96">
                <h1 className="mt-6 text-3xl font-bold text-[#080808]">Onde Estamos</h1>

                <div className="flex flex-col gap-1">
                    <strong className="text-zinc-800">Rua Paulo Sérgio Lemos, N° 18</strong>
                    <span className="text-zinc-800">Jd. Panorama. Cotia - SP</span>
                </div>
            </section>
        </PageTemplate>
    );
};

export default Address;
