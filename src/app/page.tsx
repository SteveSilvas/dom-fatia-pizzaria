import HomePage from "./screens/Homepage";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Address from "./screens/Address";
import Promotions from "./screens/Promotions";

export default function Home() {
  return (
    <main className="w-full">
      <HomePage />
      <About />
      <Promotions />
      <Address />
      <Contact />
    </main>
  );
}