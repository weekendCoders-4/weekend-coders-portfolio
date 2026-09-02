import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X } from "lucide-react";
import { navLinks } from "../../data/site";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-500 ${
          scrolled
            ? "glass shadow-2xl shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <Container className="!px-4">
          <nav
            className="flex h-14 items-center justify-between"
            aria-label="Main navigation"
          >
            <a
              href="#home"
              className="group flex items-center gap-2.5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-cyan-500/10 to-transparent transition-all group-hover:border-cyan-500/30 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                <Terminal className="h-4 w-4 text-cyan-400" aria-hidden="true" />
              </span>
              <span className="font-display text-base font-bold tracking-tight text-text-primary">
                Weekend Coders
              </span>
            </a>

            <ul className="hidden items-center gap-1 rounded-xl border border-border/50 bg-surface-card/30 p-1 backdrop-blur-sm md:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-lg px-4 py-2 text-sm text-text-secondary transition-all hover:bg-white/5 hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden md:block">
              <Button href="#contact" variant="primary" className="!py-2">
                Start a Project →
              </Button>
            </div>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-card/50 text-text-primary md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </Container>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 top-20 z-40 bg-surface/95 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Container className="flex flex-col gap-1 py-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-4 font-display text-lg text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                className="mt-4 px-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <Button href="#contact" variant="primary" className="w-full">
                  Start a Project →
                </Button>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
