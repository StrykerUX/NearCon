export type Session = {
  id: string
  sessionName: string
  startTime: string
  day: string
  description: string
  speakerFirstName: string
  speakerLastName: string
  speakerCompany: string
  speakerRole: string
  speakerImage: string
  ready: boolean
}

type SpeakerMap = Record<string, {
  firstName: string
  lastName: string
  company: string
  role: string
  image: string
}>

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

  if (!sessionsRes.ok) throw new Error('Airtable sessions API error')
  const data = await sessionsRes.json()

  return data.records
    .filter((record: any) => {
      const speakers = record.fields['⚙️ Confirmed Speakers'] ?? []
      return record.fields['Ready?'] === true && speakers.length === 1
    })
    .map((record: any) => {
      const speakerIds: string[] = record.fields['⚙️ Confirmed Speakers'] ?? []
      const speaker = speakersMap[speakerIds[0]] ?? {}

      return {
        id: record.id,
        sessionName: record.fields['Session Name'] ?? '',
        startTime: record.fields['Start Time Formatted for Calendar'] ?? '',
        day: record.fields['⚙️ Start Day'] ?? '',
        description: record.fields['Description'] ?? '',
        speakerFirstName: speaker.firstName ?? '',
        speakerLastName: speaker.lastName ?? '',
        speakerCompany: speaker.company ?? '',
        speakerRole: speaker.role ?? '',
        speakerImage: speaker.image ?? '',
        ready: record.fields['Ready?'] === true,
      }
    })
    .sort((a: Session, b: Session) => a.startTime.localeCompare(b.startTime))
}
