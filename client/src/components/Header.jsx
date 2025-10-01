import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "/logo_steam.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: "Store", link: "https://store.steampowered.com/" },
    { title: "Community", link: "https://steamcommunity.com/discussions/" },
    { title: "About", link: "https://store.steampowered.com/about/" },
    { title: "Support", link: "https://help.steampowered.com/en/" },
  ];

  return (
    <header className="bg-[#171a21] text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img className="h-8" src={Logo} alt="Steam Logo" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1b1e27] shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <img className="h-6" src={Logo} alt="Steam Logo" />
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl"
            aria-label="Close Menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col p-4 space-y-4 text-gray-300">
          {navLinks.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white border-b border-gray-700 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
