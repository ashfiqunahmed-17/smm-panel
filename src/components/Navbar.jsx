import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const LINKS = ["Home", "Services", "Blog", "About Us", "Contact Us", "API"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex items-center justify-between py-4">
        <a
          href="#home"
          className="rounded-lg border border-primary-500/40 bg-white px-5 py-2 text-sm font-bold tracking-wide text-primary-500 shadow-sm"
        >
          LOGO
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-ink-light">
          {LINKS.map((link, i) => (
            <li key={link}>
              <a
                href="#home"
                className={`relative transition-colors hover:text-primary-500 ${
                  i === 0 ? "text-primary-500" : ""
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#signin"
            className="rounded-lg border border-primary-500 px-5 py-2 text-sm font-semibold text-primary-500 transition-all hover:bg-primary-50"
          >
            Sign In
          </a>
          <motion.a
            href="#signup"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 px-5 py-2 text-sm font-semibold text-white shadow-soft"
          >
            Sign Up
          </motion.a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-2xl text-primary-600"
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white shadow-card"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#home"
                    onClick={() => setOpen(false)}
                    className="block py-2 text-ink-light font-medium hover:text-primary-500"
                  >
                    {link}
                  </a>
                </li>
              ))}
              <div className="mt-3 flex gap-3">
                <a
                  href="#signin"
                  className="flex-1 text-center rounded-lg border border-primary-500 px-4 py-2 text-sm font-semibold text-primary-500"
                >
                  Sign In
                </a>
                <a
                  href="#signup"
                  className="flex-1 text-center rounded-lg bg-primary-500 px-4 py-2 text-sm font-semibold text-white"
                >
                  Sign Up
                </a>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
