import { Navbar } from '@/components/layout/Navbar'
import { RecapHero } from '@/components/recap/RecapHero'
import { RecapIntro } from '@/components/recap/RecapIntro'
import { RecapDivider } from '@/components/recap/RecapDivider'
import { SessionHighlights } from '@/components/recap/SessionHighlights'
import { Footer } from '@/components/layout/Footer'

export default function RecapPage() {
  return (
    <div className="min-h-screen bg-nearcon-cream text-text-primary selection:bg-nearcon-green selection:text-text-primary">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <RecapHero />

      {/* Intro Section */}
      <div className="max-w-[1580px] mx-auto">
        <RecapIntro />
      </div>

      {/* Divider */}
      <RecapDivider />

      {/* Session Highlights */}
      <SessionHighlights />

      {/* Footer */}
      <Footer />
    </div>
  )
}
