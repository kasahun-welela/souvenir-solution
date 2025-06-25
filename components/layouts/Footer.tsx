import React from "react";
import Link from "next/link";
import { BookOpen, Facebook, Linkedin, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-8">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-6">
          {/* Logo and About */}
          <div className="flex-1 min-w-[200px] mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-7 w-7 text-blue-400" />
              <span className="font-bold text-xl tracking-tight">
                Souvenir Solution
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Souvenir Solution is a digital yearbook platform for universities,
              helping you create, share, and cherish memories that last a
              lifetime. Our mission is to make every moment unforgettable.
            </p>
          </div>
          {/* Quick Links */}
          <div className="flex-1 min-w-[150px] mb-8 md:mb-0">
            <h4 className="font-semibold mb-3 text-blue-300">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="hover:text-blue-400 transition-colors"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact & Social */}
          <div className="flex-1 min-w-[200px]">
            <h4 className="font-semibold mb-3 text-blue-300">Contact Us</h4>
            <p className="text-gray-400 text-sm mb-2">
              Email:{" "}
              <a
                href="mailto:support@souvenir.com"
                className="underline hover:text-blue-400"
              >
                support@souvenir.com
              </a>
            </p>
            <div className="flex gap-4 mt-4">
              <Link
                href="https://x.com/souvenirsolution"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="x"
                className="hover:text-blue-400 transition-colors"
              >
                <X className="w-5 h-5 " />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-5 h-5 " />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5 " />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Souvenir Solution. All rights reserved.
          Creating memories that last forever.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
