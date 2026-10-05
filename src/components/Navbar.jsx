import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-[#17251d] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="block">
          <h1 className="text-xl font-bold">TULAS</h1>
          <p className="text-xs tracking-[0.25em]">
            INTERNATIONAL SCHOOL
          </p>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="transition hover:text-amber-400"
          >
            About
          </a>

          <a
            href="#academics"
            className="transition hover:text-amber-400"
          >
            Academics
          </a>

          <a
            href="#campus"
            className="transition hover:text-amber-400"
          >
            Campus
          </a>

          <a
            href="#admissions"
            className="transition hover:text-amber-400"
          >
            Admissions
          </a>

          <a
            href="#contact"
            className="rounded-full bg-amber-400 px-5 py-2 text-black transition hover:scale-105"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md p-2 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="mt-1.5 block h-0.5 w-6 bg-white" />
          <span className="mt-1.5 block h-0.5 w-6 bg-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#17251d] px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-5 pt-5">
            <a
              href="#about"
              onClick={closeMenu}
              className="transition hover:text-amber-400"
            >
              About
            </a>

            <a
              href="#academics"
              onClick={closeMenu}
              className="transition hover:text-amber-400"
            >
              Academics
            </a>

            <a
              href="#campus"
              onClick={closeMenu}
              className="transition hover:text-amber-400"
            >
              Campus
            </a>

            <a
              href="#admissions"
              onClick={closeMenu}
              className="transition hover:text-amber-400"
            >
              Admissions
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="w-fit rounded-full bg-amber-400 px-5 py-2 text-black"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;