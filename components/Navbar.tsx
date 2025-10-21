"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      const sections = ["home", "about", "equipment", "contact"];
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 120; 
          const bottom = top + el.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "equipment", label: "Our Equipment" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="container flex items-center justify-between py-2">

        <Link href="#home" className="flex items-center gap-3">
          <div className="h-12 w-12 md:h-14 md:w-14 relative">
            <Image
              src="/logo.png"
              alt="MTB Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <ul className="flex items-center gap-6 sm:gap-10 text-sm sm:text-base font-medium">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className={`transition-colors ${
                  activeSection === item.id
                    ? "text-[#9b1c1c] "
                    : "text-black hover:text-[#9b1c1c]"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
