'use client'

import Image from 'next/image'
import { sendGAEvent } from '@next/third-parties/google'

export function Navbar() {
  const handleCTAClick = () => {
    sendGAEvent('event', 'cta_click', { cta_name: 'apply_to_attend_navbar' })
  }

  return (
    <nav className="sticky top-0 z-50 bg-nearcon-cream border-b border-text-primary font-helvetica text-[17px] font-[400]">
      <div className="max-w-[1580px] mx-auto h-16 flex items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center h-16">
          <div className="flex items-center">
            <Image
              src="/img/logo-near.png"
              alt="Near Logo"
              width={200}
              height={200}
              sizes="25px"
              className="h-[25px] w-auto"
            />
          </div>
          <div className="h-full border-l border-text-primary mx-5" />
          <div className="flex items-center">
            <Image
              src="/img/logo-near-name.png"
              alt="Near Name Logo"
              width={600}
              height={240}
              sizes="37px"
              className="h-[15px] w-auto"
            />
          </div>
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

          <a
            href="https://luma.com/NearconSF"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleCTAClick()}
            className="bg-black text-nearcon-cream px-4 py-3 text-[16px] font-[700] tracking-widest border border-black hover:bg-nearcon-cream hover:text-black transition-colors inline-block"
          >
            APPLY TO ATTEND
          </a>
        </div>
      </div>
    </nav>
  )
}
