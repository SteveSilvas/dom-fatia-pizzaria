import HomePage from "./screens/Homepage";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Address from "./screens/Address";

export default function Home() {
  return (
    <main className="w-full">
      <HomePage />
      <About />
      <Address />
      <Contact />
    </main>
  );
}