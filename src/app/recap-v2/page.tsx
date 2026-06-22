import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NEARCON 2027',
}

import { RecapV2HeroBlock } from '@/components/recap/RecapV2HeroBlock'
import { RecapIntro } from '@/components/recap/RecapIntro'
import { SessionHighlights } from '@/components/recap/SessionHighlights'
import { AgentWars } from '@/components/recap/AgentWars'
import { InnovationSandbox } from '@/components/recap/InnovationSandbox'
import { RecapWhatToExpectV2 } from '@/components/recap/RecapWhatToExpectV2'
import { ThankYouSponsors } from '@/components/recap/ThankYouSponsors'
import { RecapCTA } from '@/components/recap/RecapCTA'
import { getSessions } from '@/lib/airtable'
import { getVideos } from '@/lib/youtube'
import { SessionVideos } from '@/components/recap/SessionVideos'

export default async function RecapV2Page() {
  const [sessions, videos] = await Promise.all([getSessions(), getVideos()])

  return (
    <div className="min-h-screen bg-nearcon-cream text-text-primary selection:bg-nearcon-green selection:text-text-primary">
      {/* Hero block: primera sección sticky + video que la cubre al scrollear */}
      <RecapV2HeroBlock />

      {/* Intro Section */}
      <RecapIntro />

      {/* Session Highlights */}
      <SessionHighlights sessions={sessions} />

      {/* Session Videos */}
      <SessionVideos videos={videos} />

      {/* What to Expect */}
      <RecapWhatToExpectV2 />

      {/* Agent Wars */}
      <AgentWars />

      {/* Innovation Sandbox */}
      <InnovationSandbox />

      {/* Thank You to Our Sponsors */}
      <ThankYouSponsors />

      {/* See you at NEARCON 2027 */}
      <RecapCTA />
    </div>
  )
}
