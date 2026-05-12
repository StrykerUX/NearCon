import { Hero2027 } from '@/components/nearcon2027/Hero2027'
import { ScrollerNumbers } from '@/components/nearcon2027/ScrollerNumbers'
import { Statement2027 } from '@/components/nearcon2027/Statement2027'
import { ScrollerText } from '@/components/nearcon2027/ScrollerText'
import { WhatToExpect2027 } from '@/components/nearcon2027/WhatToExpect2027'
import { Countdown2027 } from '@/components/nearcon2027/Countdown2027'
import { RecapCTA2027 } from '@/components/nearcon2027/RecapCTA2027'
import { Newsletter2027 } from '@/components/nearcon2027/Newsletter2027'

export default function Page2027() {
  return (
    <div className="min-h-screen bg-nearcon-cream text-text-primary selection:bg-nearcon-green selection:text-text-primary">
      <Hero2027 />
      <ScrollerNumbers />
      <Statement2027 />
      <ScrollerText />
      <WhatToExpect2027 />
      <Countdown2027 />
      <RecapCTA2027 />
      <Newsletter2027 />
    </div>
  )
}
