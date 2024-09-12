import Hero from "./Components/Header/Header";
import Menu from "./Components/Menu";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Reviews from "./Components/Reviews/Reviews";
import Delivery from "./Components/Services/Delivery";
import BlogSection from "./Components/Blogs/BlogsSection";
export default function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <About />
      <Services />
      <Delivery />
      <Reviews />
      <BlogSection />
    </>
  );
}
