"use client";

import { AlignLeft, Github, Linkedin, Twitter, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { href: "/", text: "Home" },
  { href: "/works", text: "Works" },
  { href: "/about", text: "About" },
  { href: "/contact", text: "Contact" },
];

const socials = [
  { name: "Github", href: "https://github.com/wyasyn", icon: <Github /> },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/yasin-walum",
    icon: <Linkedin />,
  },
  { name: "X", href: "https://x.com/wyasyn", icon: <Twitter /> },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const pathname = usePathname();

  // Handle scroll position for showing/hiding the AlignLeft button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-background/30 backdrop-blur-sm z-50"
          >
            <motion.div
              initial={{ x: "100%", borderRadius: "50%" }}
              animate={{ x: 0, borderRadius: "0%" }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", duration: 0.8 }}
              className="px-12 absolute top-0 right-0 p-4 w-full max-w-[600px] bg-nav-background h-full text-white place-content-center"
            >
              <button
                className="absolute top-10 right-10 bg-foreground text-background aspect-square rounded-full grid place-items-center p-6 hover:bg-heading transition-background duration-300"
                onClick={() => setIsOpen(false)}
              >
                <X />
              </button>
              <ul className="flex flex-col gap-12 items-start justify-center">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      className={`text-xl tracking-wider md:text-5xl hover:text-white/60 duration-300 ${
                        link.href === pathname ? "text-white/50" : "text-white"
                      } `}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex items-center justify-center gap-8 mt-24 border-t py-12 border-white/30">
                {socials.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={` text-white/30 `}
                    >
                      <span className="sr-only">{social.name}</span>
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ul className="hidden sm:flex gap-12 items-center justify-end">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={`hover:text-foreground py-2 relative duration-300 ${
                link.href === pathname ? "text-foreground" : "text-heading"
              } `}
              href={link.href}
            >
              {link.text}
              {link.href === pathname && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-foreground w-1/2 duration-300 transition-all" />
              )}
            </Link>
          </li>
        ))}
      </ul>
      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 bg-foreground text-background aspect-square rounded-full grid place-items-center right-10 p-4 hover:bg-heading transition-background duration-300"
            onClick={() => setIsOpen(true)}
          >
            <AlignLeft />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
