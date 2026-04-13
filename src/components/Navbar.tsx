import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LOGO_URL = "https://lh3.googleusercontent.com/d/1-hF-A0_5FFtNy_8GjZx_7G0wTAxwRnEB";

import { BOOKING_URL } from "../constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Services", path: "/solutions" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full top-0 z-50 bg-white border-b border-outline-variant/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-0 flex justify-between items-center h-16">
        <Link to="/" className="flex items-center h-full overflow-hidden">
          <img 
            src={LOGO_URL} 
            alt="Ajyle AI Logo" 
            className="h-32 md:h-40 w-auto object-contain -my-8 md:-my-12" 
            referrerPolicy="no-referrer"
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`font-medium transition-colors font-headline tracking-tight ${
                isActive(link.path) ? "text-primary border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-primary-container"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-primary to-primary-container text-white px-6 py-2.5 rounded-lg font-bold hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
          >
            Book a Call
          </a>
        </div>

        <button className="md:hidden text-on-surface" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-outline-variant/10 px-6 py-8 space-y-6 flex flex-col">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-lg font-medium text-on-surface-variant font-headline"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-3 rounded-lg font-bold text-center"
            onClick={() => setIsOpen(false)}
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}
