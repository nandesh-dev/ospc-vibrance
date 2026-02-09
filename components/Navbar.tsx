"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Leads", href: "/leads" },
    { name: "Leaderboard", href: "/leaderboard" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
  ];

  // Control navbar visibility based on scroll
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`relative top-0 left-0 z-50 w-full h-[60px] flex justify-between items-center px-6 md:px-16 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } bg-transparent`}
    >
      <div className="flex flex-row gap-2 items-center">
        <Link href="/">
          <div className="flex flex-row gap-2 items-center">
            {/* Logo Image */}
            <Image
              src="/logo.webp"
              alt="Logo"
              width={30}
              height={30}
              className="object-contain"
            />
            <h1 className="text-white text-[20px] font-semibold">
              OSPC{" "}
              <span className="text-transparent">
                {/* Make this text transparent */}
                VITC
              </span>
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
