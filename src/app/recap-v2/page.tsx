import { Navbar } from '@/components/layout/Navbar'
import { RecapHeroV2 } from '@/components/recap/RecapHeroV2'
import { RecapIntro } from '@/components/recap/RecapIntro'
import { SessionHighlights } from '@/components/recap/SessionHighlights'
import { AgentWars } from '@/components/recap/AgentWars'
import { InnovationSandbox } from '@/components/recap/InnovationSandbox'
import { RecapWhatToExpectV2 } from '@/components/recap/RecapWhatToExpectV2'
import { ThankYouSponsors } from '@/components/recap/ThankYouSponsors'
import { RecapCTA } from '@/components/recap/RecapCTA'
import { Footer } from '@/components/layout/Footer'

export default function RecapV2Page() {
  return (
    <div className="min-h-screen bg-nearcon-cream text-text-primary selection:bg-nearcon-green selection:text-text-primary">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <RecapHeroV2 />

      {/* Intro Section */}
      <div className="max-w-[1580px] mx-auto">
        <RecapIntro />
      </div>

      {/* Session Highlights */}
      <SessionHighlights />

      {/* What to Expect */}
      <RecapWhatToExpectV2 />

      {/* Agent Wars */}
      <div className="mt-[100px]">
        <AgentWars />
      </div>

      {/* Innovation Sandbox */}
      <div className="mt-[90px] mb-[100px]">
        <InnovationSandbox />
      </div>

      {/* Thank You to Our Sponsors */}
      <ThankYouSponsors />

      {/* See you at NEARCON 2027 */}
      <RecapCTA />

      {/* Footer */}
      <Footer />
    </div>
  )
}
