import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[400px] sm:min-h-[600px] md:min-h-[800px] flex items-center justify-center bg-black"
    >
      <Image
        src="/bg-hero.jpg"
        alt="PT. Mahir Trans Bersaudara"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute inset-0 bg-black/35" />
      
      <div className="relative z-10 text-center px-6 md:px-16 translate-y-[15%]">
        <h1 className="text-white text-[22px] sm:text-[32px] md:text-7xl font-extrabold leading-[1.15] tracking-wide md:tracking-wider max-w-7xl mx-auto">
          PT. MAHIR TRANS BERSAUDARA
        </h1>
        <p className="text-white text-[11px] sm:text-[15px] md:text-2xl font-medium mt-3 max-w-2xl mx-auto leading-snug tracking-wide">
          General Supplier, Contractor Repair, Jasa Angkutan Darat
        </p>
      </div>
    </section>
  );
}
