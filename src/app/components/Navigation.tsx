import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

export function Navigation() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);

      // Sluit het mobiele menu alleen bij duidelijke, neerwaartse scroll
      if (menuOpen && currentY > lastScrollY.current + 12) {
        setMenuOpen(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    // Scroll altijd naar boven na een routewissel
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ease-out ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-stone-200 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 md:py-6 relative">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <Logo className="w-10 h-10" />
            <div className="flex flex-col">
              <span
                className={`text-2xl tracking-tight transition-colors ${
                  scrolled ? "text-stone-800" : "text-white"
                }`}
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Parketservice Hasert & Zn.
              </span>
              <span
                className={`text-sm transition-colors ${
                  scrolled ? "text-stone-500" : "text-stone-100"
                }`}
              >
                Reparatie • Onderhoud • Herstel
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium tracking-wide border-b-2 border-transparent pb-1 transition-colors ${
                isActive("/")
                  ? "text-amber-800 border-amber-700"
                  : scrolled
                    ? "text-stone-600 hover:text-stone-900 hover:border-stone-400"
                    : "text-white hover:text-amber-100 hover:border-amber-200"
              }`}
            >
              Home
            </Link>
            <Link
              to="/over-ons"
              className={`text-sm font-medium tracking-wide border-b-2 border-transparent pb-1 transition-colors ${
                isActive("/over-ons")
                  ? "text-amber-800 border-amber-700"
                  : scrolled
                    ? "text-stone-600 hover:text-stone-900 hover:border-stone-400"
                    : "text-white hover:text-amber-100 hover:border-amber-200"
              }`}
            >
              Over ons
            </Link>
            <Link
              to="/contact"
              className={`inline-flex items-center justify-center h-9 px-4 text-sm font-medium tracking-wide rounded-full transition-colors ${
                isActive("/contact")
                  ? "text-amber-50 bg-amber-800 shadow-sm"
                  : scrolled
                    ? "text-stone-700 hover:text-stone-900 hover:bg-stone-50"
                    : "text-white hover:text-amber-100 hover:bg-white/10"
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
            onClick={() =>
              setMenuOpen((prev) => {
                const next = !prev;
                if (next) {
                  // Baseline voor scroll-detectie als menu opengaat
                  lastScrollY.current = window.scrollY;
                }
                return next;
              })
            }
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
          className={`fixed inset-0 md:hidden bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`md:hidden fixed inset-0 top-0 pt-20 pb-8 h-lvh bg-stone-900/80 backdrop-blur-md border-t border-white/10 shadow-lg transform transition-all duration-300 origin-top ${
            menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="max-w-6xl mx-auto px-6 flex flex-col gap-6">
            <div className="flex justify-end">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full p-2 text-stone-100 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-stone-900/80"
                aria-label="Sluit navigatie"
                onClick={() => setMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <Link
              to="/"
              className={`text-lg font-medium px-4 py-2 rounded-full transition-colors ${
                isActive("/")
                  ? "text-amber-100 bg-white/10"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Home
            </Link>
            <Link
              to="/over-ons"
              className={`text-lg font-medium px-4 py-2 rounded-full transition-colors ${
                isActive("/over-ons")
                  ? "text-amber-100 bg-white/10"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Over ons
            </Link>
            <Link
              to="/contact"
              className={`text-lg font-medium px-4 py-2 rounded-full transition-colors ${
                isActive("/contact")
                  ? "text-amber-100 bg-white/10"
                  : "text-white hover:bg-white/10"
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
