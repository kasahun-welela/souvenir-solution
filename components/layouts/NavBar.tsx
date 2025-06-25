"use client";

import React, { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary">
          Souvenir Solution
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="hover:text-primary font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-primary font-medium transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary font-medium transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="/login"
            className="ml-4 px-4 py-2 rounded bg-primary text-white hover:bg-primary/90 font-medium transition-colors"
          >
            Login
          </Link>
        </div>
        {/* Hamburger for Mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded hover:bg-gray-100 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>
      {/* Mobile Menu  */}
      {menuOpen && (
        <div className="md:hidden absolute left-0 top-full w-full bg-white border-t border-gray-200 px-4 py-3 flex flex-col gap-4 z-50 shadow animate-fade-in">
          <Link
            href="/"
            className="hover:text-primary font-medium transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-primary font-medium transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary font-medium transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 rounded bg-primary text-white hover:bg-primary/90 font-medium transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
