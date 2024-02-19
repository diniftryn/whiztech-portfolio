import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import LinearText from "@/components/LinearText";
import Services from "@/components/Services";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <Header />
      <LinearText />

      <About />
      <Services />
      <Works />
      <Contact />

      <Footer />
    </main>
  );
}
