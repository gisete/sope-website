import Link from 'next/link'
import { Logo } from './Logo'
import { MobileMenuClient } from './MobileMenuClient'
import { getGlobal } from '@/lib/payload'

type NavItem = { label: string; link: string; id?: string }

export async function Header() {
  // Direct database access
  const mainMenu = await getGlobal('main-menu')
  const navItems = mainMenu?.navItems || []

  return (
    <header className="py-4 lg:py-6 relative z-30">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex-shrink-0">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems &&
            navItems.map((item: NavItem) => (
              <Link key={item.id} href={item.link}>
                <span className="text-base font-medium text-brand-dark hover:text-brand-warm transition-colors duration-200">
                  {item.label}
                </span>
              </Link>
            ))}
          <Link href="https://www.instagram.com/sope.arlivre/" target="_blank" className="ml-2">
            <span className="text-base font-medium text-brand-warm hover:text-brand-accent transition-colors duration-200">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 6.5H17.51M7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2ZM16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                  stroke="#a15b43"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </Link>
        </nav>

        {/* Mobile Menu Component */}
        <MobileMenuClient navItems={navItems} />
      </div>
    </header>
  )
}
