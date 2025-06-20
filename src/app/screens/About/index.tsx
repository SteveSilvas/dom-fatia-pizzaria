import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";
import about_pizza_background from "@/assets/freepik_assistant_1750243451880.png";
import PageTitle from "@/components/PageTitle";
const About = () => {
    return (
        <PageTemplate
            height="min-h-auto"
            id="about"
            className="flex flex-col md:flex-row bg-white dark:bg-[#080808]">
            <section className="relative w-full md:w-1/2 md:h-auto py-4 px-6">
                <PageTitle>Sobre a Dom Fatia Pizzaria</PageTitle>

                <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 text-justify">
                    A <strong>Dom Fatia Pizzaria</strong>
                    , em Cotia - SP, é o lugar onde a tradição encontra a inovação para criar a verdadeira pizza artesanal. Assamos nossas pizzas em forno a lenha, garantindo uma crocância perfeita e um sabor defumado inconfundível. Nosso compromisso vai além dos ingredientes selecionados; buscamos manter os princípios de família e união em cada etapa, do preparo com carinho à entrega do produto quente e saboroso na sua mesa.
                </p>
                <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 text-justify">
                    É essa combinação de qualidade impecável, bom atendimento e um toque familiar que nos faz a pizzaria favorita de Cotia. Venha experimentar o sabor especial de cada fatia e descubra por que a Dom Fatia é mais do que uma pizzaria, é um pedacinho da tradição e do sabor familiar em cada mordida.
                </p>
            </section>

            <section className="relative mt-4 md:mt-0 w-full md:w-1/2 h-50 md:h-auto">
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
