import ItemMenu from "@/components/ItemMenu";

const Menu = () => {
    const pizzasSalgadas = [
        {
            name: "Margherita",
            description: "Molho de tomate, mussarela, manjericão fresco",
            price: "R$ 39,99",
        },
        {
            name: "Calabresa",
            description: "Calabresa fatiada, cebola roxa, mussarela",
            price: "R$ 39,99",
        },
        {
            name: "Quatro Queijos",
            description: "Mussarela, gorgonzola, parmesão e catupiry",
            price: "R$ 39,99",
        },
        {
            name: "Portuguesa",
            description: "Presunto, ovo, cebola, pimentão, ervilha, mussarela",
            price: "R$ 39,99",
        },
    ];

    const pizzasDoces = [
        {
            name: "Chocolate com Morango",
            description: "Chocolate ao leite, morangos frescos",
            price: "R$ 39,99",
        },
        {
            name: "Romeu e Julieta",
            description: "Goiabada e queijo mussarela",
            price: "R$ 39,99",
        },
        {
            name: "Banana com Canela",
            description: "Banana fatiada, açúcar e canela",
            price: "R$ 39,99",
        },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-800 p-10">
            <h1 className="text-4xl font-bold text-center mb-10 text-amber-600">Nosso Cardápio</h1>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-amber-500">Pizzas Salgadas</h2>
                <div className="grid grid-cols-1 gap-2">
                    {pizzasSalgadas.map((item, index) => (
                        <ItemMenu
                            key={index}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-6 text-amber-500">Pizzas Doces</h2>
                <div className="grid grid-cols-1 gap-2 ">
                    {pizzasDoces.map((item, index) => (
                        <ItemMenu
                            key={index}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Menu;
