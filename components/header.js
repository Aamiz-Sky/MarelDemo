"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#003a70] text-white w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center p-5">

        {/* Hamburger Menu for Mobile */}
        <button
          className="block lg:hidden focus:outline-none mr-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-3xl">☰</span> {/* Simple menu icon */}
        </button>

        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://marel.com/assets/toolkit/static/logo.svg"
            alt="Marel Logo"
            width={100}
            height={40}
          />
        </Link>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row lg:space-x-6 text-md lg:text-lg font-bold text-white bg-[#003a70] lg:bg-transparent fixed lg:static top-16 left-0 w-full lg:w-auto p-5 md:p-0 ml-6`}
        >
          <Link
            href="/"
            className="hover:bg-white/10 md:hover:bg-transparent px-2 py-1 rounded"
          >
            Products & solutions
          </Link>
          <Link
            href="/about"
            className="hover:bg-white/10 md:hover:bg-transparent px-2 py-1 rounded"
          >
            Software
          </Link>
          <Link
            href="/services"
            className="hover:bg-white/10 md:hover:bg-transparent px-2 py-1 rounded"
          >
            Service
          </Link>
          <Link
            href="/contact"
            className="hover:bg-white/10 md:hover:bg-transparent px-2 py-1 rounded"
          >
            News
          </Link>

          <Link
            href="/contact"
            className="hover:bg-white/10 md:hover:bg-transparent px-2 py-1 rounded"
          >
            Events
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
