import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

export function Navigation() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);
  
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-sm border-stone-200 shadow-sm' 
        : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 md:py-6 relative">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <Logo className="w-10 h-10" />
            <div className="flex flex-col">
              <span className={`text-2xl tracking-tight transition-colors ${
                scrolled ? 'text-stone-800' : 'text-white'
              }`} style={{ fontFamily: 'Playfair Display, serif' }}>
                Parketservice Hasert & Zn.
              </span>
              <span className={`text-sm transition-colors ${
                scrolled ? 'text-stone-500' : 'text-stone-100'
              }`}>
                Reparatie • Onderhoud • Herstel
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex gap-8">
            <Link 
              to="/" 
              className={`text-sm transition-colors ${
                isActive("/") 
                  ? "text-amber-800" 
                  : scrolled 
                    ? "text-stone-600 hover:text-stone-900" 
                    : "text-white hover:text-amber-100"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/over-ons" 
              className={`text-sm transition-colors ${
                isActive("/over-ons") 
                  ? "text-amber-800" 
                  : scrolled 
                    ? "text-stone-600 hover:text-stone-900" 
                    : "text-white hover:text-amber-100"
              }`}
            >
              Over ons
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm transition-colors ${
                isActive("/contact") 
                  ? "text-amber-800" 
                  : scrolled 
                    ? "text-stone-600 hover:text-stone-900" 
                    : "text-white hover:text-amber-100"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-sm p-2 text-sm 
              focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2
              focus:ring-offset-transparent"
            aria-label={menuOpen ? "Sluit navigatie" : "Open navigatie"}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <X
                className={`h-6 w-6 ${
                  scrolled ? "text-stone-800" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  scrolled ? "text-stone-800" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile navigation overlay + panel */}
        <div
          className={`fixed inset-0 md:hidden bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`md:hidden absolute inset-x-0 top-full pt-4 pb-6 transform transition-all duration-300 origin-top ${
            menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-4 px-6">
            <Link
              to="/"
              className={`text-lg font-medium transition-colors ${
                isActive("/")
                  ? "text-amber-200"
                  : "text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/over-ons"
              className={`text-lg font-medium transition-colors ${
                isActive("/over-ons")
                  ? "text-amber-200"
                  : "text-white"
              }`}
            >
              Over ons
            </Link>
            <Link
              to="/contact"
              className={`text-lg font-medium transition-colors ${
                isActive("/contact")
                  ? "text-amber-200"
                  : "text-white"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
