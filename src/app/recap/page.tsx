import { Navbar } from '@/components/layout/Navbar'
import { RecapHero } from '@/components/recap/RecapHero'
import { RecapIntro } from '@/components/recap/RecapIntro'
import { SessionHighlights } from '@/components/recap/SessionHighlights'
import { AgentWars } from '@/components/recap/AgentWars'
import { InnovationSandbox } from '@/components/recap/InnovationSandbox'
import { RecapWhatToExpect } from '@/components/recap/RecapWhatToExpect'
import { RecapCTA } from '@/components/recap/RecapCTA'
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

      {/* Session Highlights */}
      <SessionHighlights />

      {/* What to Expect */}
      <RecapWhatToExpect />

      {/* Agent Wars */}
      <div className="mt-[100px]">
        <AgentWars />
      </div>

      {/* Innovation Sandbox */}
      <div className="mt-[90px] mb-[100px]">
        <InnovationSandbox />
      </div>

      {/* See you at NEARCON 2027 */}
      <RecapCTA />

      {/* Footer */}
      <Footer />
    </div>
  )
}
