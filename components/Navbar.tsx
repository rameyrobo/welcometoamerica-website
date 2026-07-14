'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// ─── Nav structure ────────────────────────────────────────────────────────────
// Each top-level item can be a plain link OR a dropdown.
// Dropdowns include sub-items.
interface NavItem {
  label: string
  href?: string
  children?: { label: string; href: string }[]
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Immigration',
    href: '/immigration',
    children: [
      { label: 'Immigration Services', href: '/immigration' },
      { label: 'Green Card', href: '/immigration/green-card' },
      { label: 'Fee Waiver', href: '/immigration/fee-waiver' },
      { label: 'Citizenship Classes', href: '/immigration/citizenship-classes' },
      { label: 'Clases de Ciudadanía', href: '/immigration/clases-de-ciudadania' },
    ],
  },
  { label: 'Community Health Worker', href: '/community-health' },
  {
    label: 'Medi-Cal',
    href: '/medi-cal',
    children: [
      { label: 'Medi-Cal Overview', href: '/medi-cal' },
      { label: 'Medicare', href: '/medi-cal/medicare' },
      { label: 'Covered California', href: '/medi-cal/covered-ca' },
    ],
  },
  {
    label: 'More',
    children: [
      { label: 'Locations', href: '/locations' },
      { label: 'Quick Links', href: '/quick-links' },
      { label: 'Disclaimer', href: '/disclaimer' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
]

// ─── Dropdown component ───────────────────────────────────────────────────────
function DropdownMenu({
  item,
  isActive,
}: {
  item: NavItem
  isActive: (href: string) => boolean
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLLIElement>(null)

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const anyChildActive = item.children?.some((c) => isActive(c.href)) ?? false
  const parentActive = item.href ? isActive(item.href) : anyChildActive

  return (
    <li ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setOpen(true)}
        aria-haspopup="true"
        aria-expanded={open}
        className={`
          flex items-center gap-1 px-3 py-2 rounded text-sm font-body font-semibold transition-colors
          ${parentActive ? 'bg-white/15 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}
        `}
      >
        {item.label}
        {/* Chevron */}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown panel */}
      {open && (
        <ul
          onMouseLeave={() => setOpen(false)}
          className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-navy/10 py-1 z-50"
          role="menu"
        >
          {item.children?.map((child) => (
            <li key={child.href} role="none">
              <Link
                href={child.href}
                onClick={() => setOpen(false)}
                role="menuitem"
                className={`
                  block px-4 py-2.5 text-sm font-body transition-colors
                  ${
                    isActive(child.href)
                      ? 'bg-navy/8 text-navy font-semibold'
                      : 'text-ink/80 hover:bg-navy/5 hover:text-navy'
                  }
                `}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(href + '/')
  }

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setOpenMobileGroup(null)
  }, [pathname])

  const toggleMobileGroup = (label: string) =>
    setOpenMobileGroup((prev) => (prev === label ? null : label))

  return (
    <header className="bg-navy shadow-lg sticky top-0 z-50">
      {/* ── Utility bar ── */}
      <div className="bg-terracotta">
        <div className="section-wrapper py-1.5 flex items-center justify-between gap-4">
          <p className="text-white text-xs sm:text-sm font-body hidden sm:block">
            Free &amp; Low-Cost Services &mdash; DOJ Recognized Nonprofit
          </p>
          <div className="flex items-center gap-4 ml-auto sm:ml-0">
            <a
              href="tel:8449826374"
              className="text-white font-semibold text-xs sm:text-sm hover:text-white/80 transition-colors"
            >
              📞 844-982-6374
            </a>
            <span className="text-white/40 hidden sm:block">|</span>
            <a
              href="sms:5624725246"
              className="text-white font-semibold text-xs sm:text-sm hover:text-white/80 transition-colors hidden sm:block"
            >
              💬 Text: 562-472-5246
            </a>
          </div>
        </div>
      </div>

      {/* ── Main nav bar ── */}
      <nav aria-label="Main navigation">
        <div className="section-wrapper">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded shrink-0"
            >
              <span className="font-display text-white text-lg sm:text-xl font-bold leading-tight">
                Welcome to America
                <span className="block text-terracotta-200 text-xs font-body font-normal tracking-wide">
                  Services
                </span>
              </span>
            </Link>

            {/* ── Desktop nav ── */}
            <ul className="hidden lg:flex items-center gap-0.5" role="list">
              {navItems.map((item) => {
                // Plain link (no dropdown)
                if (!item.children) {
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href!}
                        className={`
                          px-3 py-2 rounded text-sm font-body font-semibold transition-colors
                          ${
                            isActive(item.href!)
                              ? 'bg-white/15 text-white'
                              : 'text-white/80 hover:text-white hover:bg-white/10'
                          }
                        `}
                        aria-current={isActive(item.href!) ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                }
                // Dropdown
                return <DropdownMenu key={item.label} item={item} isActive={isActive} />
              })}
            </ul>

            {/* ── Mobile toggle ── */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden text-white p-2 rounded hover:bg-white/10 transition-colors"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        {mobileOpen && (
          <div id="mobile-menu" className="lg:hidden bg-navy-700 border-t border-white/10">
            <ul className="section-wrapper py-3 flex flex-col gap-0.5" role="list">
              {navItems.map((item) => {
                if (!item.children) {
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href!}
                        className={`
                          block px-4 py-3 rounded text-sm font-body font-semibold transition-colors
                          ${
                            isActive(item.href!)
                              ? 'bg-white/15 text-white'
                              : 'text-white/80 hover:text-white hover:bg-white/10'
                          }
                        `}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                }

                const groupOpen = openMobileGroup === item.label
                const anyChildActive = item.children.some((c) => isActive(c.href))

                return (
                  <li key={item.label}>
                    <button
                      onClick={() => toggleMobileGroup(item.label)}
                      className={`
                        w-full flex items-center justify-between px-4 py-3 rounded text-sm font-body font-semibold transition-colors
                        ${anyChildActive || groupOpen ? 'bg-white/15 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}
                      `}
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${groupOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {groupOpen && (
                      <ul className="ml-4 mt-0.5 flex flex-col gap-0.5 border-l-2 border-white/20 pl-3">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={`
                                block px-3 py-2.5 rounded text-sm font-body transition-colors
                                ${
                                  isActive(child.href)
                                    ? 'text-white font-semibold'
                                    : 'text-white/70 hover:text-white'
                                }
                              `}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              })}

              {/* Mobile CTA */}
              <li className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2">
                <a
                  href="tel:8449826374"
                  className="block px-4 py-3 bg-terracotta text-ink font-bold rounded-full text-sm text-center"
                >
                  📞 Call: 844-982-6374
                </a>
                <a
                  href="sms:5624725246"
                  className="block px-4 py-3 border border-white/30 text-white/80 rounded text-sm text-center"
                >
                  💬 Text: 562-472-5246
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
