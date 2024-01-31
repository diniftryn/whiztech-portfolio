import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import ScrollBar from "@/components/ScrollBar";
import Services from "@/components/Services";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <Header />
      <ScrollBar />

      <About />
      <Services />
      <Works />
      <Contact />

      <Footer />
    </main>
  );
}
