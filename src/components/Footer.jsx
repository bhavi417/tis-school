function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#17251d] px-6 py-16 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold">TULAS</h2>

            <p className="mt-2 text-sm tracking-[0.2em] text-gray-400">
              INTERNATIONAL SCHOOL
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Explore</h3>

            <div className="mt-4 flex flex-col gap-3 text-gray-400">
              <a href="#about" className="hover:text-white">
                About
              </a>

              <a href="#campus" className="hover:text-white">
                Campus
              </a>

              <a href="#admissions" className="hover:text-white">
                Admissions
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Connect</h3>

            <p className="mt-4 leading-7 text-gray-400">
              Contact Tulas International School to learn
              more about admissions and student life.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-sm text-gray-500">
          © 2026 Tulas International School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;