'use client'

import { sendGAEvent } from '@next/third-parties/google'

export function Navbar() {
  const handleCTAClick = () => {
    sendGAEvent('event', 'cta_click', { cta_name: 'apply_to_attend_navbar' })
  }

  return (
    <nav className="sticky top-0 z-50 bg-nearcon-cream border-b border-text-primary font-helvetica text-[17px] font-[400]">
      <div className="max-w-[1500px] mx-auto h-16 flex items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center gap-2 font-helvetica text-2xl tracking-tighter">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
            <path d="M4 4v16l16-16v16" />
          </svg>
          near
        </div>

        {/* Nav Links + CTA Button — grouped on the right */}
        <div className="flex items-center gap-[50px]">
          <div className="hidden md:flex items-center gap-10 text-[17px] font-[400]">
            <a href="#about" className="hover:opacity-70 transition-opacity">
              About
            </a>
            <a href="#speakers" className="hover:opacity-70 transition-opacity">
              Speakers
            </a>
            <a href="#schedule" className="hover:opacity-70 transition-opacity">
              Agenda
            </a>
            <a href="#sponsors" className="hover:opacity-70 transition-opacity">
              Sponsors
            </a>
          </div>

          <button
            onClick={handleCTAClick}
            className="bg-black text-nearcon-cream px-4 py-3 text-[16px] font-[700] tracking-widest hover:bg-gray-800 transition-colors"
          >
            APPLY TO ATTEND
          </button>
        </div>
      </div>
    </nav>
  )
}
