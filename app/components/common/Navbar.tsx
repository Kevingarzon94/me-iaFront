export const Navbar = () => {
  return (
    <nav className="fixed top-0 z-20 w-full border-b border-neutral-200 bg-white/95 shadow-lg backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-primary-600 text-xl font-bold">Mi Portafolio</div>

        {/* Navigation Links */}
        <ul className="hidden space-x-8 md:flex">
          <li>
            <a
              href="/"
              className="hover:text-primary-600 font-medium text-neutral-700 transition duration-300"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-primary-600 font-medium text-neutral-700 transition duration-300"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-primary-600 font-medium text-neutral-700 transition duration-300"
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-primary-600 font-medium text-neutral-700 transition duration-300"
            >
              Contacto
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          <button className="hover:text-primary-600 text-neutral-500 focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
