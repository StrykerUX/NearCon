import { Hero2027V2 } from '@/components/nearcon2027/Hero2027V2'
import { ScrollerTextV2 } from '@/components/nearcon2027/ScrollerTextV2'
import { Countdown2027V2 } from '@/components/nearcon2027/Countdown2027V2'
import { RecapCTA2027V2 } from '@/components/nearcon2027/RecapCTA2027V2'

export default function Page2027V2() {
  return (
    <div className="min-h-screen bg-nearcon-cream text-text-primary selection:bg-nearcon-green selection:text-text-primary">
      <Hero2027V2 />
      <ScrollerTextV2 />
      <Countdown2027V2 />
      <RecapCTA2027V2 />
    </div>
  )
}
