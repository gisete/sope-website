'use client'

import { useState } from 'react'
import Link from 'next/link'

type NavItem = { label: string; link: string; id?: string }

export function MobileMenuClient({ navItems }: { navItems: NavItem[] | null }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-brand-dark transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-brand-dark transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-brand-dark transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
        ></span>
      </button>

      {/* Mobile Menu Overlay - White with opacity */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-brand-dark opacity-40 z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: 'var(--background)' }}
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end p-6">
            <button
              onClick={closeMenu}
              className="w-8 h-8 flex items-center justify-center"
              aria-label="Close menu"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="w-6 h-6 text-brand-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-1 px-6">
            {navItems &&
              navItems.map((item) => (
                <Link key={item.id} href={item.link} onClick={closeMenu}>
                  <span className="block py-4 text-lg font-medium text-brand-dark hover:text-brand-warm border-b border-brand-light transition-colors duration-200">
                    {item.label}
                  </span>
                </Link>
              ))}

            {/* Instagram Link with Icon */}
            <Link
              href="https://www.instagram.com/sope.arlivre/"
              target="_blank"
              onClick={closeMenu}
            >
              <span className="flex items-center space-x-3 py-4 text-lg font-medium text-brand-warm hover:text-brand-accent border-b border-brand-light transition-colors duration-200">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 6.5H17.51M7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2ZM16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Instagram</span>
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}
