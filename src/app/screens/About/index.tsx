import PageTemplate from "@/components/PageTemplate";

const About = () => {
    return (
        <PageTemplate id="about" className="bg-white">
            <h1 className="text-3xl font-bold text-zinc-800">Sobre Nós</h1>
            <p className="mt-4 text-lg text-zinc-600">Bem-vindo à nossa pizzaria!</p>
        </PageTemplate>
    );
};

export default About;
