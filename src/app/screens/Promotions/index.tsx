import PageTemplate from "@/components/PageTemplate";
import PageTitle from "@/components/PageTitle";

const Promotions = () => {
  return (
    <PageTemplate
      height="min-h-auto"
      id="about"
      className="flex flex-col md:flex-row bg-amber-500 dark:bg-[#080808]">
      <section className="relative w-full md:w-1/2 md:h-auto py-4 px-6">
        <PageTitle>Nossas Promoções</PageTitle>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Confira nossas últimas promoções e ofertas!
        </p>
      </section>
    </PageTemplate>
  );
}
export default Promotions;