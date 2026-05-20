export type AirtableSpeaker = {
  firstName: string
  lastName: string
  company: string
  role: string
  image: string
}

export type Session = {
  id: string
  sessionName: string
  startTime: string
  day: string
  description: string
  speakers: AirtableSpeaker[]
  ready: boolean
}

type SpeakerMap = Record<string, AirtableSpeaker>

const ALLOWED_SESSIONS = new Set([
  'The Unified Commerce Layer for the Agentic Era',
  'Scaling Intelligence and Generalization',
  'Before Agents Control Capital: Security, Risk, and Autonomy',
  'Where Economic Value Emerges in a World of Converging Intelligence',
  'Why AI Needs Formal Verification',
  'Privacy is Fundamental: Verifiable Privacy and Transparency in the Age of AI',
  'NEAR Intents: The Future of Finance',
  'Open Weights and the Future of Model Building',
  'Why Private AI Matters',
])

async function getSpeakersMap(): Promise<SpeakerMap> {
  const res = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_SPEAKERS_TABLE_ID}`,
    {
      headers: { Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}` },
      next: { revalidate: 1800 }
    }
  )
  if (!res.ok) return {}
  const data = await res.json()

  const map: SpeakerMap = {}
  for (const record of data.records) {
    map[record.id] = {
      firstName: record.fields['First Name'] ?? '',
      lastName: record.fields['Last Name'] ?? '',
      company: record.fields['Company'] ?? '',
      role: record.fields['Role or Title'] ?? '',
      image: record.fields['Website Speaker Treatments']?.[0]?.url ?? '',
    }
  }
  return map
}

export async function getSessions(): Promise<Session[]> {
  const [sessionsRes, speakersMap] = await Promise.all([
    fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_SESSIONS_TABLE_ID}`,
      {
        headers: { Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}` },
        next: { revalidate: 1800 }
      }
    ),
    getSpeakersMap()
  ])

  if (!sessionsRes.ok) {
    console.error('Airtable sessions API error:', sessionsRes.status)
    return []
  }
  const data = await sessionsRes.json()

  return data.records
    .filter((record: any) => {
      const sessionName: string = record.fields['Session Name'] ?? ''
      const speakers: string[] = record.fields['⚙️ Confirmed Speakers'] ?? []
      return record.fields['Ready?'] === true
        && speakers.length >= 1
        && ALLOWED_SESSIONS.has(sessionName)
    })
    .map((record: any) => {
      const speakerIds: string[] = record.fields['⚙️ Confirmed Speakers'] ?? []
      const speakers = speakerIds
        .map((id) => speakersMap[id])
        .filter(Boolean) as AirtableSpeaker[]

      return {
        id: record.id,
        sessionName: record.fields['Session Name'] ?? '',
        startTime: record.fields['Start Time Formatted for Calendar'] ?? '',
        day: record.fields['⚙️ Start Day'] ?? '',
        description: record.fields['Description'] ?? '',
        speakers,
        ready: record.fields['Ready?'] === true,
      }
    })
    .sort((a: Session, b: Session) => a.startTime.localeCompare(b.startTime))
}
