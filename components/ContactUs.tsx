import Image from "next/image";
import Link from "next/link";

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="relative bg-white text-black overflow-hidden font-sans"
    >
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-6 md:px-20">

        <h2 className="text-3xl md:text-5xl font-extrabold text-[#9b1c1c] mb-2 tracking-wide font-sans text-center">
          CONTACT US
        </h2>
        <p className="text-gray-600 mb-8 text-sm md:text-base font-medium text-center">
          Klik untuk menghubungi kami
        </p>

        <div className="flex flex-col gap-4 w-full max-w-[500px]">

          <Link
            href="mailto:ptmahirtransbersaudara@gmail.com"
            className="flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-md border border-gray-400 hover:shadow-lg hover:bg-[#fdf5f5] transition-all duration-200"
          >
            <Image
              src="/icons/gmail-icon.png"
              alt="Gmail"
              width={22}
              height={22}
              className="object-contain"
            />
            <p className="text-gray-800 text-sm md:text-base font-medium font-sans">
              ptmahirtransbersaudara@gmail.com
            </p>
          </Link>

          <Link
            href="https://www.google.com/maps/place/PT.+Mahir+Trans+Bersaudara/@1.2031572,101.2463234,871m/data=!3m1!1e3!4m14!1m7!3m6!1s0x31d37d001e7af6f1:0xa2420c34cf554749!2sPT.+Mahir+Trans+Bersaudara!8m2!3d1.2031572!4d101.2488983!16s%2Fg%2F11m68j_2br!3m5!1s0x31d37d001e7af6f1:0xa2420c34cf554749!8m2!3d1.2031572!4d101.2488983!16s%2Fg%2F11m68j_2br?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-md border border-gray-400 hover:shadow-lg hover:bg-[#fdf5f5] transition-all duration-200"
          >
            <Image
              src="/icons/location-icon.png"
              alt="Location"
              width={22}
              height={22}
              className="object-contain"
            />
            <p className="text-gray-800 text-sm md:text-base font-medium font-sans">
              Riau, Indonesia
            </p>
          </Link>
        </div>
      </div>

      <div className="bg-[#9b1c1c] py-4 text-center text-white text-xs md:text-sm font-medium font-sans w-full">
        PT Mahir Trans Bersaudara © 2025 All Rights Reserved.
      </div>
    </section>
  );
}
