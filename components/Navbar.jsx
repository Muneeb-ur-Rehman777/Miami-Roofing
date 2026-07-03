"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaBars,
  FaXmark,
  FaPhone,
} from "react-icons/fa6";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}

        <Link href="/">
          <h1
            className={`text-3xl font-black ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          >
            Miami
            <span className="text-orange-500">
              {" "}
              Roofing
            </span>
          </h1>
        </Link>

        {/* Desktop */}

        <nav className="hidden lg:flex items-center gap-10">

          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-semibold transition ${
                pathname === link.href
                  ? "text-orange-500"
                  : scrolled
                  ? "text-slate-700 hover:text-orange-500"
                  : "text-white hover:text-orange-400"
              }`}
            >
              {link.name}
            </Link>
          ))}

        </nav>

        {/* Desktop CTA */}

        <div className="hidden lg:flex items-center gap-5">

          <a
            href="tel:+13055551234"
            className={`flex items-center gap-2 font-semibold ${
              scrolled
                ? "text-slate-800"
                : "text-white"
            }`}
          >
            <FaPhone className="text-orange-500" />
            (305) 555-1234
          </a>

          <Link
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-xl font-semibold"
          >
            Free Estimate
          </Link>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden text-3xl ${
            scrolled ? "text-slate-900" : "text-white"
          }`}
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t">

          <div className="flex flex-col px-6 py-8">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`py-4 text-lg font-semibold border-b ${
                  pathname === link.href
                    ? "text-orange-500"
                    : "text-slate-700"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <a
              href="tel:+13055551234"
              className="flex items-center gap-3 mt-8 font-semibold text-slate-700"
            >
              <FaPhone className="text-orange-500" />
              (305) 555-1234
            </a>

            <Link
              href="/contact"
              className="mt-6 text-center bg-orange-500 hover:bg-orange-600 transition text-white py-4 rounded-xl font-semibold"
            >
              Get Free Estimate
            </Link>

          </div>

        </div>
      </div>
    </header>
  );
}