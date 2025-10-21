"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export default function About() {
  return (
    <section id="about" className={`${poppins.className} text-gray-800`}>

      <div className="bg-gradient-to-b from-[#fff2f2] to-white py-32 px-6 md:px-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.04]" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="border-l-4 border-[#9b1c1c] pl-4 mb-4">
              <h2 className="text-4xl md:text-6xl font-extrabold text-[#9b1c1c] tracking-tight">
                PT. MAHIR TRANS BERSAUDARA
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-[17px] tracking-wide text-justify">
              Merupakan perusahaan terpercaya yang bergerak di bidang penyewaan,
              perbaikan, ekspedisi, pemasok, serta pabrikasi kendaraan berat
              untuk mendukung proyek konstruksi, infrastruktur, dan logistik di
              seluruh Indonesia, khususnya Riau. Kami menyediakan berbagai alat
              berat seperti Foco Truck, Crane, Triller, dan Head Truck dalam
              kondisi terbaik, didukung tim berpengalaman dan armada yang
              dirawat secara berkala untuk memastikan performa maksimal, demi
              layanan terbaik sesuai standar keselamatan dan efisiensi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/about-truck.jpg"
              alt="Mahir Trans Bersaudara"
              width={520}
              height={360}
              className="rounded-3xl shadow-lg border border-[#f8d7da] transition-transform hover:scale-[1.02] object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="bg-[#fff8f8] py-28 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="border-l-4 border-[#9b1c1c] pl-4 mb-4">
              <h3 className="text-3xl font-semibold text-[#9b1c1c] uppercase">
                Visi
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-[17px] text-justify">
              Menjadi perusahaan terkemuka di bidang penyewaan, perbaikan,
              ekspedisi, dan pabrikasi alat berat, dengan standar pelayanan
              terbaik, inovasi berkelanjutan, serta komitmen terhadap
              keselamatan dan kepuasan pelanggan di seluruh Indonesia,
              terkhususnya di wilayah provinsi Riau.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="border-l-4 border-[#9b1c1c] pl-4 mb-4">
              <h3 className="text-3xl font-semibold text-[#9b1c1c] uppercase">
                Misi
              </h3>
            </div>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700 leading-relaxed text-[17px] text-justify">
              <li>
                Menyediakan layanan penyewaan alat berat yang berkualitas tinggi
                dan optimal untuk mendukung proyek konstruksi dan infrastruktur.
              </li>
              <li>
                Menawarkan jasa perbaikan dan perawatan alat berat dengan
                standar teknis terbaik guna memastikan kinerja maksimal.
              </li>
              <li>
                Mengembangkan layanan trucking dan ekspedisi yang efisien serta
                tepat waktu untuk memenuhi kebutuhan logistik industri.
              </li>
              <li>
                Menyediakan solusi pabrikasi komponen presisi dan berkualitas
                tinggi guna mendukung berbagai sektor industri.
              </li>
            </ol>
          </motion.div>
        </div>
      </div>

      {[
        { title: "Strategi Perusahaan", bg: "white" },
        { title: "Kebijakan Mutu", bg: "#fff8f8" },
        { title: "Kebijakan K3", bg: "white" },
      ].map((section, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`py-24 px-6 md:px-20 ${
            section.bg === "white" ? "bg-white" : "bg-[#fff8f8]"
          }`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="border-l-4 border-[#9b1c1c] pl-4 mb-6">
              <h3 className="text-3xl font-semibold text-[#9b1c1c] uppercase">
                {section.title}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-[17px] text-justify">
              {section.title === "Strategi Perusahaan" &&
                "Kami berkomitmen memberikan layanan terbaik dengan armada berkualitas, tenaga profesional, dan respons cepat terhadap kebutuhan pelanggan. Setiap unit alat berat kami dirawat dan diperiksa rutin untuk menjamin keandalan dan keamanan operasional. Kami juga mengadopsi teknologi terkini dalam manajemen armada guna meningkatkan efisiensi dan daya saing, serta menjalankan operasional dengan mengutamakan keselamatan kerja dan kepedulian terhadap lingkungan."}
              {section.title === "Kebijakan Mutu" &&
                "PT. Mahir Trans Bersaudara berkomitmen memberikan layanan terbaik dalam penyewaan, perbaikan, trucking, ekspedisi, suplai, dan pabrikasi kendaraan berat dengan standar tinggi. Kami memastikan kepuasan pelanggan melalui layanan tepat waktu dan andal, menjaga kualitas armada lewat perawatan rutin, serta terus berinovasi untuk meningkatkan efisiensi dengan mematuhi seluruh standar industri yang berlaku."}
              {section.title === "Kebijakan K3" &&
                "PT. Mahir Trans Bersaudara berkomitmen menjaga keselamatan, kesehatan, dan kesejahteraan seluruh karyawan, mitra, serta lingkungan kerja. Kami menerapkan budaya keselamatan di setiap aktivitas operasional, mengidentifikasi dan mengendalikan risiko kerja, serta memberikan pelatihan rutin agar seluruh karyawan memahami prosedur K3. Perusahaan juga memastikan seluruh kegiatan sesuai standar keselamatan yang berlaku untuk menciptakan lingkungan kerja yang aman dan sehat."}
            </p>
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-t from-[#fff2f2] to-white py-28 px-6 md:px-20"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-12 text-[#9b1c1c] uppercase tracking-wide">
            Mitra Kami
          </h3>
          <div className="flex justify-center">
            <Image
              src="/mitra-all.png"
              alt="Mitra Kami"
              width={900}
              height={200}
              className="object-contain mx-auto"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
