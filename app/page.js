import Hero from "./Components/Header/Header";
import Menu from "./Components/Menu";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Reviews from "./Components/Reviews/Reviews";
export default function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <About />
      <Services />
      <Reviews />
    </>
  );
}
