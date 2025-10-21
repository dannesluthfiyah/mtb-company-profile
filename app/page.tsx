import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Image from "next/image";
import OurEquipment from "@/components/OurEquipment";
import ContactUs from "@/components/ContactUs";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <OurEquipment />
      <ContactUs />
      
    </main>
  );
}
