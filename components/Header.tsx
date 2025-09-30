"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/data/data";
import { RiMenuFill, RiCloseFill } from "@remixicon/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <header className="absolute top-0 left-0 bg-primaryClr w-full py-5 text-white z-40">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png" // ✅ from public/images/logo.png
            alt="logo"
            width={95}
            height={50}
            priority
          />
        </Link>

        {/* ✅ Desktop Menu (always visible on large screens) */}
        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="link font-semibold after:!bg-secondaryClr hover:text-secondaryClr"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="primary-btn">
            Contact
          </Link>
        </nav>

        {/* ✅ Mobile Menu (toggle with button) */}
        <nav
          className={`lg:hidden fixed top-0 left-0 bg-white h-screen w-full text-black flex flex-col items-center justify-center transition-transform ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="space-y-7 text-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="link font-semibold hover:text-secondaryClr"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="primary-btn mt-10">
            Contact
          </Link>
        </nav>

        {/* Menu Button (only shows on mobile) */}
        <button
          className="lg:hidden w-12 h-12 bg-secondaryClr text-primaryClr flex items-center justify-center rounded-full relative active:bg-secondaryClr/90 p-1.5"
          onClick={handleClick}
        >
          {isOpen ? <RiCloseFill size={30} /> : <RiMenuFill size={30} />}
        </button>
      </div>
    </header>
  );
}
