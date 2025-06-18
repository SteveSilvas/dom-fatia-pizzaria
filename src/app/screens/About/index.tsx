import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";
import about_pizza_background from "@/assets/freepik_assistant_1750243451880.png";
const About = () => {
    return (
        <PageTemplate
            height="min-h-auto"
            id="about"
            className="flex flex-col md:flex-row bg-white">
            <section className="relative w-full md:w-1/2 md:h-auto py-4 px-6">
                <h1 className="mt-6 text-3xl font-bold text-zinc-800">Sobre a Dom Fatia Pizzaria</h1>
                <p className="mt-4 text-lg text-zinc-600">
                    A <strong>Dom Fatia Pizzaria</strong> nasceu para oferecer a verdadeira pizza artesanal, feita com ingredientes selecionados e muito carinho. Estamos em Cotia - SP e unimos tradição e inovação em cada fatia.
                </p>
                <p className="mt-4 text-lg text-zinc-600">
                    Valorizamos a qualidade, o bom atendimento e o cuidado em cada etapa — do forno à sua mesa. Se ainda não nos conhece, experimente e descubra por que somos a pizzaria favorita de Cotia. Cada fatia tem um sabor especial — e a próxima pode ser a sua!
                </p>
            </section>

            <section className="relative w-full md:w-1/2 h-50 md:h-auto">
                <Image
                    src={about_pizza_background}
                    alt="Pizza Background"
                    className="w-full h-auto object-cover"
                />
            </section>
        </PageTemplate>
    );
};

export default About;
