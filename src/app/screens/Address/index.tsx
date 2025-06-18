import Map from "@/components/Map";
import PageTemplate from "@/components/PageTemplate";

const Address = () => {
    return (
        <PageTemplate 
        id="address" 
        className="flex flex-col md:flex-row bg-amber-500"
      >
            <section className="relative w-full md:w-1/2 md:h-96 py-4 px-10">
                <h1 className="mt-6 text-3xl font-bold text-[#080808]">Onde Estamos</h1>
                {/* <Map /> */}
            </section>
        </PageTemplate>
    );
};

export default Address;
