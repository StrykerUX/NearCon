import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/nearcon/Hero'
import { Countdown } from '@/components/nearcon/Countdown'
import { IntroText } from '@/components/nearcon/IntroText'
import { WhatToExpect } from '@/components/nearcon/WhatToExpect'
import { Speakers } from '@/components/nearcon/Speakers'
import { ScrollerBanner } from '@/components/nearcon/ScrollerBanner'
import { Schedule } from '@/components/nearcon/Schedule'
import { GetInvolved } from '@/components/nearcon/GetInvolved'
import { Sponsors } from '@/components/nearcon/Sponsors'
import { Partners } from '@/components/nearcon/Partners'
import { PreviousNearcons } from '@/components/nearcon/PreviousNearcons'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-nearcon-cream text-text-primary selection:bg-nearcon-green selection:text-text-primary">
      {/* Full-width sticky navbar */}
      <Navbar />

      {/* Hero section */}
      <Hero />

      {/* IntroText section */}
      <div className="max-w-[1400px] mx-auto">
        <IntroText />
      </div>

      {/* Countdown section */}
      <Countdown />

      {/* Full-width black section */}
      <WhatToExpect />

      {/* Speakers section — full width */}
      <Speakers />

      {/* Scroller banner — full width */}
      <ScrollerBanner />

      {/* Live Schedule section — full width */}
      <Schedule />

      {/* Sections between black sections */}
      <GetInvolved />
      <Sponsors />
      <Partners />

      {/* Full-width black section */}
      <PreviousNearcons />

      {/* Footer */}
      <Footer />
    </div>
  )
}
