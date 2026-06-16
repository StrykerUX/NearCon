import { CountdownRecapV2 } from '@/components/nearcon2027/CountdownRecapV2'
import { RecapHeroV3 } from '@/components/recap/RecapHeroV3'
import { TickerBanner } from '@/components/ui/TickerBanner'
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
      {/* Top banner stripe */}
      <div style={{ paddingTop: '50px' }}>
        <TickerBanner />
      </div>

      {/* Countdown Section */}
      <CountdownRecapV2 />

      {/* Banner stripe */}
      <TickerBanner />

      <div style={{ height: '80px' }} />

      {/* Hero Section */}
      <RecapHeroV3 mode="expand-shrink" />

      {/* Intro Section */}
      <div className="max-w-[1580px] mx-auto">
        <RecapIntro />
      </div>

      {/* Session Highlights */}
      <SessionHighlights sessions={sessions} />

      {/* Session Videos */}
      <SessionVideos videos={videos} />

      {/* What to Expect */}
      <RecapWhatToExpectV2 />

      {/* Agent Wars */}
      <div className="mt-[100px]">
        <AgentWars />
      </div>

      {/* Innovation Sandbox */}
      <div className="mt-[90px] mb-[20px]">
        <InnovationSandbox />
      </div>

      {/* Thank You to Our Sponsors */}
      <ThankYouSponsors />

      {/* See you at NEARCON 2027 */}
      <RecapCTA />
    </div>
  )
}
